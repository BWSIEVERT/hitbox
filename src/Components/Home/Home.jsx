import React from "react";

// Image Imports
import ImageOne from "./imageOne.jpg";
import ImageTwo from "./imageTwo.png";
import ImageThree from "./imageThree.png";
import ImageFour from "./imageFour.jpg";

// Style Imports
import {
  Wrapper,
  PageControl,
  WrapperTwo,
  ContainerOne,
  ContainerTwo,
  ContainerThree,
  ContainerFour,
  ImageInsert,
  TitleWrapper,
  Title,
  TitleTwo,
  ImageInsertTwo,
  TitleWrapperTwo,
  TitleThree,
  TitleWrapperThree,
  TitleFour,
  TitleWrapperFour,
  ImageInsertThree,
  ImageInsertFour
} from "./HomeStyles";

const Home = () => {
  return (
    <PageControl>
      <Wrapper>
        <ContainerOne>
          <TitleWrapper>
            <div>
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <a style={{zIndex: '500', position: 'absolute', left: '0', top: '0', height: '100%', width: '100%'}} href="http://google.com"></a><Title style={{ zIndex: "2" }}>Team Statistics</Title>
            </div>
          </TitleWrapper>
          <ImageInsert
            style={{ zIndex: "1", position: "relative"}}
            alt="COD"
          />
        </ContainerOne>
        <ContainerTwo>
            <TitleWrapperTwo>
            <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a style={{zIndex: '500', position: 'absolute', left: '0', top: '0', height: '100%', width: '100%'}} href="http://google.com"></a><TitleTwo style={{ zIndex: "4" }}>Player Statistics</TitleTwo>
          </div>
          <ImageInsertTwo
            style={{ zIndex: "3", position: "absolute" }}
            alt="COD"
          />
            </TitleWrapperTwo>
        </ContainerTwo>
      </Wrapper>
      <WrapperTwo>
        <ContainerThree>
        <TitleWrapperThree>
            <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a style={{zIndex: '500', position: 'absolute', left: '0', top: '0', height: '100%', width: '100%'}} href="http://google.com"></a><TitleThree style={{ zIndex: "4" }}>Player Statistics</TitleThree>
          </div>
          <ImageInsertThree
            style={{ zIndex: "3", position: "absolute" }}
            alt="COD"
          />
            </TitleWrapperThree>
        </ContainerThree>
        <ContainerFour>
        <TitleWrapperFour>
            <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a style={{zIndex: '500', position: 'absolute', left: '0', top: '0', height: '100%', width: '100%'}} href="http://google.com"></a><TitleFour style={{ zIndex: "4" }}>Player Statistics</TitleFour>
          </div>
          <ImageInsertFour
            style={{ zIndex: "3", position: "absolute" }}
            alt="COD"
          />
            </TitleWrapperFour>
        </ContainerFour>
      </WrapperTwo>
    </PageControl>
  );
};

export default Home;
