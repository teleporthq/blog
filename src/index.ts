import fs from 'fs-extra'
import Teleport from '@teleporthq/teleport-lib-js'
import TeleportElementsCore from '@teleporthq/teleport-elements-core'
import TeleportGeneratorNext from './generators/teleport-generator-next/src'

const { definitions, mappingHtml, mappingReact, mappingNext } = TeleportElementsCore

// load the blog data (teleport project built using teleportHQ's UIDL)
import project from './data'

// instantiate the core library
const teleport = new Teleport()

// teleport uses a mapping mechanism specific to each target code
// mappingHtml comes with a set of predefined mappings
// which can be overriden or extended

// simple extensions
mappingHtml.maps.A = { type: 'a' }
mappingHtml.maps.Ul = { type: 'ul' }
mappingHtml.maps.Li = { type: 'li' }
mappingHtml.maps.Pre = { type: 'pre' }
mappingHtml.maps.Br = { type: 'br' }
mappingHtml.maps.Iframe = { type: 'iframe' }
mappingHtml.maps.Hr = { type: 'hr' }

// the following extension depends on react-gist npm module
// therefore we specify the source of that component and the prefered import option
mappingHtml.maps.Gist = {
  type: 'Gist',
  source: 'react-gist',
  defaultImport: true,
}

// load the definitions
teleport.useLibrary(definitions)

// load all mappings
// mappings can extend one another, in this case mappingReact extends mappingHtml, and mappingNext extends mappingReact
// therefore the order matters
teleport.useMapping(mappingHtml)
teleport.useMapping(mappingReact)
teleport.useMapping(mappingNext)

// load the code generator
// @ts-ignore
teleport.useGenerator(new TeleportGeneratorNext())

// get all the generated files
// @ts-ignore
const projectFiles = teleport.target('next').generator.generateProject(project, {
  generateAllFiles: true,
})

// save the code files on disk
Object.keys(projectFiles.filesByName).map(async (file) => {
  const path = `dist/${file}`
  try {
    await fs.outputFile(path, projectFiles.filesByName[file])
  } catch (e) {
    // tslint:disable-next-line
    console.log(e.message)
  }
})

// copy all static files into dist/static
async function writeStatic() {
  try {
    await fs.copy('./src/static', 'dist/static')
    await fs.copy('./src/next.config.js', 'dist/next.config.js')
    await fs.outputFile('dist/static/blog/teleport.json', JSON.stringify(project, null, 2))
  } catch (error) {
    // tslint:disable-next-line
    console.error(error)
  }
}

writeStatic()
