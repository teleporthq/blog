import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import { AuthorCard, Vimeo, Body, Page, Paragraph, Title, AuthorCardWrapper, Span, NextPrev } from './../components'

export default {
  name: 'userGuide13',
  url: 'user-guide-13',
  content: Page(
    HeaderCommon,
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/paul.jpg',
          name: 'Paul Brie',
          twitterHandle: '@aelythe',
          twitterLink: 'https://twitter.com/@aelythe',
        }),
        Span('Posted on July 1, 2019'),
      ]),
      Title('User Guide: Component Context Menu'),

      Paragraph(
        `To access the Context Menu options for a given component, simply right click the name of the component in the Tree View panel, Components panel or directly from the canvas.`
      ),

      Vimeo('https://www.youtube.com/embed/BvrlM6ukLIg'),

      NextPrev('< Prev Post', 'user-guide-12', 'Next Post >', 'user-guide-14')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
