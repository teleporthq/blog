import FooterCommon from './common/footer'
import CopyCommon from './common/copy'
import HeaderCommon from './common/header'
import InfoTextCommon from './common/infoText'

import { AuthorCard, AutoScaleImage, Body, Hero, Page, Paragraph, Title, AuthorCardWrapper, Span } from '../components'
// import br from '../elements/br'

export default {
  name: 'journey-part10',
  url: 'journey-part10',
  content: Page(
    HeaderCommon,
    Hero('/static/blog/journey/Part10.png', 'Journey Part 9', '#ffffff'),
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
      Title('Our Journey: Part 10'),

      AutoScaleImage({
        src: '/static/blog/journey/part10-pic.png',
        alt: `A plot visualizing the most common placement for UL html tags`,
      }),

      Paragraph(
        `The unordered list tags (UL) also show an interesting pattern. These tags are more frequent at the top of the page where the header is situated. In addition, we can observe that there are areas smaller than the DIV tags saw previously. The way the color is created in this image is simple, we first create the image in black and white only. Black pixels (0) are pixels where the tags were never found and white pixels (255) are pixels were the tags are found most frequently. Note that this value is normalized so it will have different absolute values for each plot. To obtain the colors, we then just had to multiply the resulting matrix by the RGB values of the desired HEX code. In this case, our beloved purple color #822CEC.`
      )
    ),
    InfoTextCommon,
    FooterCommon,
    CopyCommon
  ),
}
