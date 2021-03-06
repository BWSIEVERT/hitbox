import styled from 'styled-components'

// Image Imports
import ImageOne from './imageOne.jpg'
import ImageThree from './imageThree.png'
import ImageTwo from './imageTwo.png'
import ImageFour from './imageFour.jpg'

export const PageControl = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
cursor: pointer;
`;

export const Wrapper = styled.div`
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
`;

export const WrapperTwo = styled.div`
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
`;

export const WrapperThree = styled.div`
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
`;

export const WrapperFour = styled.div`
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
`;

export const ImageInsert = styled.img.attrs({
    src: `${ImageOne}`
  })`
width: 100%;
height: 100%;
opacity: 0.2;
transition: 1200ms;
`;

export const ImageInsertTwo = styled.img.attrs({
    src: `${ImageThree}`
  })`
width: 100%;
height: 100%;
opacity: 0.2;
transition: 1200ms;
`;

export const ImageInsertThree = styled.img.attrs({
    src: `${ImageTwo}`
  })`
width: 100%;
height: 100%;
opacity: 0.2;
transition: 1200ms;
`;

export const ImageInsertFour = styled.img.attrs({
    src: `${ImageFour}`
  })`
width: 100%;
height: 100%;
opacity: 0.2;
transition: 1200ms;
`;

export const TitleWrapper = styled.div`
position: absolute;
border: 3 px solid purple;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const TitleWrapperTwo = styled.div`
position: absolute;
border: 3 px solid purple;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;


export const TitleWrapperThree = styled.div`
position: absolute;
border: 3 px solid purple;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;


export const TitleWrapperFour = styled.div`
position: absolute;
border: 3 px solid purple;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const Title = styled.h1`
height: 100%;
width: 100%;
color: #fff;
background-color: none;
opacity: 0;
text-align: center;
text-transform: uppercase;
transition: 1200ms;
font-family: Poppins, sans-serif;
`;

export const TitleTwo = styled.h1`
color: #fff;
background-color: none;
opacity: 0;
text-align: center;
text-transform: uppercase;
transition: 1200ms;
font-family: Poppins, sans-serif;
`;

export const TitleThree = styled.h1`
color: #fff;
background-color: none;
opacity: 0;
text-align: center;
text-transform: uppercase;
transition: 1200ms;
font-family: Poppins, sans-serif;
`;

export const TitleFour = styled.h1`
color: #fff;
background-color: none;
opacity: 0;
text-align: center;
text-transform: uppercase;
transition: 1200ms;
font-family: Poppins, sans-serif;
`;

export const ContainerOne = styled.div`
position: relative;
width: 100%;
height: 50%;
background-color: black;
&:hover ${ImageInsert} {
    opacity: 0.4;
    transition: 2000ms;
}
&:hover ${Title} {
    opacity: 1;
    transition: 2000ms;
}
`;

export const ContainerTwo = styled.div`
position: relative;
width: 100%;
height: 50%;
background-color: black;
&:hover ${ImageInsertTwo} {
    opacity: 0.4;
    transition: 2000ms;
}
&:hover ${TitleTwo} {
    opacity: 1;
    transition: 2000ms;
}
`;

export const ContainerThree = styled.div`
position: relative;
width: 100%;
height: 50%;
background-color: black;
&:hover ${ImageInsertThree} {
    opacity: 0.4;
    transition: 2000ms;
}
&:hover ${TitleThree} {
    opacity: 1;
    transition: 2000ms;
}
`;

export const ContainerFour = styled.div`
position: relative;
width: 100%;
height: 50%;
background-color: black;
&:hover ${ImageInsertFour} {
    opacity: 0.4;
    transition: 2000ms;
}
&:hover ${TitleFour} {
    opacity: 1;
    transition: 2000ms;
}
`;





