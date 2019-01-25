import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'

import { AuthorCard, AutoScaleImage, Body, Hero, Page, Paragraph, Title, AuthorCardWrapper, Span } from '../components'
// import br from '../elements/br'

export default {
  name: 'journey-part5',
  url: 'journey-part5',
  content: Page(
    HeaderCommon,
    Hero('/static/blog/journey/Part5.png', 'Journey Part 5', '#ffffff'),
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/mihaitaba.png',
          name: 'Mihai Tabacaru',
          twitterHandle: '@mihaiitabacaru',
          twitterLink: 'https://twitter.com/@mihaiitabacaru',
        }),
        Span('Posted on Jan 23'),
      ]),
      Title('Our Journey: Part 5'),

      AutoScaleImage({
        src: '/static/blog/journey/part5-pic.png',
        alt: `Plot showing the depth of nested tags in html.`,
      }),

      Paragraph(
        `Another variable of interest that we have access to is the depth of each tag. The depth is 0 for the HTML tag, then 1 for the head and body and so on. This variable is numeric but can only take the form of integers so we choose scatterplots to display it here. We compared the depth to several other variables of our dataset, in particular the tagNames to give a new dimension to the histogram previously plotted. As it is a discrete variable, we added a jitter effect and transparency to the point for a better visualization. We can see that if the maximum depth of tags is 40, most tags have a depth between 0 and 20. Some depth seems to present more tags but it could correspond to specific websites with lot of occurence of the same tag at the same depth. With more websites this effect may be smoothened.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
