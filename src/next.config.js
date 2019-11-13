const isProd = process.env.NODE_ENV === 'production'
module.exports = {
	exportPathMap: async function (defaultPathMap) {
		return {
			'/blog': { page: '/Index' },
			'/blog/data-science-internship-applied-to-design-2019': { page: '/DataScienceInternship' },
			'/blog/understanding-the-web-parsing-web-pages-semantically': { page: '/UnderstandingTheWeb' },
			'/blog/we-believe-in-AI-powered-code-generation': { page: '/WeBelieveInAi' },
			'/blog/journey-part-1': { page: '/JourneyPart1' },
			'/blog/journey-part-2': { page: '/JourneyPart2' },
			'/blog/journey-part-3': { page: '/JourneyPart3' },
			'/blog/journey-part-4': { page: '/JourneyPart4' },
			'/blog/journey-part-5': { page: '/JourneyPart5' },
			'/blog/journey-part-6': { page: '/JourneyPart6' },
			'/blog/journey-part-7': { page: '/JourneyPart7' },
			'/blog/journey-part-8': { page: '/JourneyPart8' },
			'/blog/journey-part-9': { page: '/JourneyPart9' },
			'/blog/journey-part-10': { page: '/JourneyPart10'},
			'/blog/two-billion-websites' : { page: '/TwoBillionWebsites' },
			'/blog/user-interface-building-process' : { page: '/UserInterfaceBuildingProcess' },
			'/blog/a-limited-supply-of-developers' : { page: '/ALimitedSupplyOfDevelopers' },
			'/blog/a-mental-exo-skeleton' : { page: '/AMentalExoSkeleton' },
			'/blog/further-than-automation' : { page: '/FurtherThanAutomation' },
			'/blog/accumulating-knowledge' : { page: '/AccumulatingKnowledge' },
			'/blog/one-language-for-every-UI' : { page: '/OneLanguageForEveryUI' },
			'/blog/the-UIDL-project' : { page: '/TheUIDLProject' },
			'/blog/quality-first' : { page: '/QualityFirst' },
			'/blog/transparent-process-and-planning' : { page: '/TransparentProcessAndPlanning' },
			'/blog/json-schema' : { page: '/JsonSchema' },
			'/blog/typescript-interfaces' : { page: '/TypeScriptInterfaces'},
			'/blog/teleportHQ-code-generators' : { page: '/TeleportHQCodeGenerators'},
			'/blog/node-types' : { page: '/NodeTypes'},
      '/blog/component-uidl' : { page: '/ComponentUidl' },
      '/blog/enforcing-convention-for-wireframe-object-detection' : { page: '/EnforcingConventionForWireframeObjectDetection' },
			'/blog/introduction-to-code-generation' : { page: '/IntroductionToCodeGeneration' },
			'/blog/setup' : { page: '/Setup' },
			'/blog/generate-react-code' : { page: '/GenerateReactCode' },
			'/blog/adding-styles' : { page: '/AddingStyles' },
			'/blog/style-flavors' : { page: '/StyleFlavors' },
			'/blog/vue-example' : { page: '/VueExample' },
			'/blog/dependencies' : { page: '/Dependencies' },
      '/blog/quickstart' : { page: '/Quickstart' },    
      '/blog/going-up-the-tree-of-abstraction' : { page: '/GoingUpTheTreeOfAbstraction' },   
      '/blog/dom-introduction' : { page: '/DomIntroduction' },                
			'/blog/dom-richer-data' : { page: '/DomRicherData' },                
			'/blog/dom-custom-web-pages-parser' : { page: '/DomCustomWebPagesParser' },                
			'/blog/dom-clustering' : { page: '/DomClustering' },                
      '/blog/dom-exploratory-data-analysis' : { page: '/DomExploratoryDataAnalysis' },   
			'/blog/dom-depth-of-tags' : { page: '/DomDepthOfTags' },                
			'/blog/dom-distance-of-tags-from-top' : { page: '/DomDistanceOfTagsFromTop' },                
			'/blog/dom-distance-of-tags-from-left' : { page: '/DomDistanceOfTagsFromLeft' },                
			'/blog/dom-width-of-tags' : { page: '/DomWidthOfTags' },                
			'/blog/dom-height-of-tags' : { page: '/DomHeightOfTags' },                
			'/blog/dom-depth-with-layout' : { page: '/DomDepthWithLayout' },                
			'/blog/dom-background-color-approximation' : { page: '/DomBackgroundColorApproximation' },                
      '/blog/dom-tag-types-on-page' : { page: '/DomTagTypesOnPage' },
			'/blog/dom-further-exploration-idea-1' : { page: '/DomFurtherExplorationIdea1' },                           
			'/blog/dom-further-exploration-idea-2' : { page: '/DomFurtherExplorationIdea2' },                           
      '/blog/dom-further-exploration-idea-3' : { page: '/DomFurtherExplorationIdea3' },
      '/blog/new-vision-api' : { page: '/NewVisionApi' },
      '/blog/user-guide-0' : { page: '/UserGuide0'},  
      '/blog/user-guide-1' : { page: '/UserGuide1'},
      '/blog/user-guide-2' : { page: '/UserGuide2'},
      '/blog/user-guide-3' : { page: '/UserGuide3'},
      '/blog/user-guide-4' : { page: '/UserGuide4'},
      '/blog/user-guide-5' : { page: '/UserGuide5'},
      '/blog/user-guide-6' : { page: '/UserGuide6'},
      '/blog/user-guide-7' : { page: '/UserGuide7'},
      '/blog/user-guide-8' : { page: '/UserGuide8'},
      '/blog/user-guide-9' : { page: '/UserGuide9'},
      '/blog/user-guide-10' : { page: '/UserGuide10'},
      '/blog/user-guide-11' : { page: '/UserGuide11'},
      '/blog/user-guide-12' : { page: '/UserGuide12'},
      '/blog/user-guide-13' : { page: '/UserGuide13'},
      '/blog/user-guide-14' : { page: '/UserGuide14'},
      '/blog/user-guide-15' : { page: '/UserGuide15'},
      '/blog/user-guide-16' : { page: '/UserGuide16'},
      '/blog/user-guide-17' : { page: '/UserGuide17'},
      '/blog/user-guide-18' : { page: '/UserGuide18'},
      '/blog/user-guide-19' : { page: '/UserGuide19'},
      '/blog/user-guide-20' : { page: '/UserGuide20'},
      '/blog/user-guide-21' : { page: '/UserGuide21'},
      '/blog/user-guide-22' : { page: '/UserGuide22'},
      '/blog/user-guide-23' : { page: '/UserGuide23'},
      '/blog/user-guide-24' : { page: '/UserGuide24'},
      '/blog/user-guide-25' : { page: '/UserGuide25'},
      '/blog/user-guide-26' : { page: '/UserGuide26'},
      '/blog/user-guide-27' : { page: '/UserGuide27'},
      '/blog/user-guide-28' : { page: '/UserGuide28'}, 
      
      '/blog/user-guide-29' : { page: '/UserGuide29'},  
      '/blog/user-guide-30' : { page: '/UserGuide30'},
      '/blog/user-guide-31' : { page: '/UserGuide31'},
      '/blog/user-guide-32' : { page: '/UserGuide32'},
      '/blog/user-guide-33' : { page: '/UserGuide33'},
      '/blog/user-guide-34' : { page: '/UserGuide34'},
      '/blog/user-guide-35' : { page: '/UserGuide35'},
      '/blog/user-guide-36' : { page: '/UserGuide36'},
      '/blog/user-guide-37' : { page: '/UserGuide37'},
      '/blog/user-guide-38' : { page: '/UserGuide38'},
      '/blog/user-guide-39' : { page: '/UserGuide39'},
      '/blog/user-guide-40' : { page: '/UserGuide40'},
      '/blog/user-guide-41' : { page: '/UserGuide41'},
      '/blog/user-guide-42' : { page: '/UserGuide42'},
      '/blog/user-guide-43' : { page: '/UserGuide43'},
      '/blog/user-guide-44' : { page: '/UserGuide44'},
      '/blog/user-guide-45' : { page: '/UserGuide45'},
      '/blog/user-guide-46' : { page: '/UserGuide46'},
      '/blog/user-guide-47' : { page: '/UserGuide47'},
      '/blog/user-guide-48' : { page: '/UserGuide48'},
      '/blog/user-guide-49' : { page: '/UserGuide49'},

      '/blog/new-code-gen' : { page: '/NewCodeGen'},   
      '/blog/start-your-career' : { page: '/StartYourCareer'}, 	  
			'/blog/teleport-to-hacktoberfest': { page: '/HacktoberFest' },
		}
	},
	// You may only need to add assetPrefix in the production.
	assetPrefix: isProd ? 'https://teleporthq.io/blog' : ''
}