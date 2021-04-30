import React from 'react'

// Style Imports
import { PageControl, ImageInsert, SectionWrapper, SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix, TabOne, TabTwo, TabThree, TabFour, TabFive, TabSix, TabSeven, TabEight, TabNine, TabTen, TabEleven, TabTwelve, TitleOne, TitleTwo, TitleThree, TitleFour, TitleFive, TitleSix, TitleSeven, TitleEight, TitleNine, TitleTen,
TitleEleven, TitleTwelve } from './TeamStatsStyles'

// Image Imports
import Banners from './banners.jpg'


const TeamStats = () => {
    return (
        <PageControl>
          <SectionWrapper>
              <SectionOne>
                  <TabOne>
                      <TitleOne>New York Subliners</TitleOne>
                  </TabOne>
                  <TabTwo>
                  <TitleTwo>Los Angeles Guerrillas</TitleTwo>
                  </TabTwo>
              </SectionOne>
              <SectionTwo>
                  <TabThree>
                  <TitleThree>London Royal Ravens</TitleThree>
                  </TabThree>
                  <TabFour>
                  <TitleFour>Seattle Surge</TitleFour>
                  </TabFour>
              </SectionTwo>
              <SectionThree>
                  <TabFive>
                  <TitleFive>Minnesota Rokkr</TitleFive>
                  </TabFive>
                  <TabSix>
                  <TitleSix>Paris Legion</TitleSix>
                  </TabSix>
              </SectionThree>
              <SectionFour>
                  <TabSeven>
                  <TitleSeven>Atlanta Faze</TitleSeven>
                  </TabSeven>
                  <TabEight>
                  <TitleEight>Chicago Huntsmen</TitleEight>
                  </TabEight>
              </SectionFour>
              <SectionFive>
                  <TabNine>
                  <TitleNine>Dallas Empire</TitleNine>
                  </TabNine>
                  <TabTen>
                  <TitleTen>Florida Mutineers</TitleTen>
                  </TabTen>
              </SectionFive>
              <SectionSix>
                  <TabEleven>
                  <TitleEleven>Optic Chicago</TitleEleven>
                  </TabEleven>
                  <TabTwelve>
                  <TitleTwelve>Toronto Ultra</TitleTwelve>
                  </TabTwelve>
              </SectionSix>
          </SectionWrapper>
          <ImageInsert
            alt="COD"
          />
        </PageControl>
    )
}

export default TeamStats
