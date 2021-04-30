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
  TitleWrapperTwo
} from "./HomeStyles";

const Home = () => {
  return (
    <PageControl>
      <Wrapper>
        <ContainerOne>
          <TitleWrapper>
            <div>
              <Title style={{ zIndex: "2" }}>Team Statistics</Title>
            </div>
          </TitleWrapper>
          <ImageInsert
            style={{ zIndex: "1", position: "relative" }}
            alt="COD"
          />
        </ContainerOne>
        <ContainerTwo>
            <TitleWrapperTwo>
            <div>
            <TitleTwo style={{ zIndex: "4" }}>Player Statistics</TitleTwo>
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
          <h1 style={{ position: "absolute", left: "51%" }}>Hello</h1>
          <img
            style={{ width: "100%", height: "100%" }}
            src={ImageFour}
            alt="COD"
          />
        </ContainerThree>
        <ContainerFour>
          <h1 style={{ position: "absolute", left: "51%" }}>Hello</h1>
          <img
            style={{ width: "100%", height: "100%" }}
            src={ImageTwo}
            alt="COD"
          />
        </ContainerFour>
      </WrapperTwo>
    </PageControl>
  );
};

export default Home;
