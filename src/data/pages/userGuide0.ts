import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'
import FinalFooter from './common/finalFooter'

import {
  AuthorCard,
  AutoScaleImage,
  Body,
  Page,
  Paragraph,
  Title,
  AuthorCardWrapper,
  Span,
  NextPrev,
} from './../components'

export default {
  name: 'userGuide0',
  url: 'user-guide-0',
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
        Span('Posted on May 20, 2019'),
      ]),
      Title('teleportHQ Playground Basic User Guide'),

      Paragraph(`Here’s an introductory user guide for the basic features of our Playground, coming out October 2019.`),

      AutoScaleImage({
        src: '/static/blog/user-guide-visual.png',
        alt: 'teleportHQ Playground User Guide, Playground coming out October 2019.',
      }),

      NextPrev('', '', 'Next Post >', 'user-guide-1')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
