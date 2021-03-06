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
} from '../components'

export default {
  name: 'accumulatingKnowledge',
  url: 'accumulating-knowledge',
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
        Span('Posted on January 11, 2019'),
      ]),
      Title('Accumulating Knowledge'),

      AutoScaleImage({
        src: '/static/blog/accumulating-knowledge.png',
        alt:
          'Picture of a diagram showing the accumulated knowledge of Owners, Developers and Designer needed to end up with a product.',
      }),

      Paragraph(
        `Machine Learning uses training sets to generate functions that model the match between the input data and the output data, to successfully predict from new inputs and imitate human decisions.`
      ),

      NextPrev('<Further Than Automation', 'further-than-automation', '', '')
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon,
    FinalFooter
  ),
}
