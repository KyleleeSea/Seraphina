import styled from "styled-components";
import LandingImage from '../../assets/LandingImage.jpg'

export const BackgroundImage = styled.div`
    background-image: url(${LandingImage});
    background-blend-mode: overlay;
    background-size: cover; 

    z-index: -1;
    position: relative; 
    top: 0; 
    left: 0; 
  
    /* Preserve aspect ratio */
    min-width: 100%;
    min-height: 100%;

    /* Align items */
    display: table; 

    
    height: 100vh;
`

export const CenteringBox = styled.div`
    display: table-cell; 
    vertical-align: middle;
`

export const Headline = styled.h1`
    font-family: "Poppins", Helvetica, sans-serif;
    font-weight: 700;

    @media (max-width: 500px) {
        font-size: 1.7em;
        padding-left: 5%;
      }

    @media (min-width: 501px) {
        font-size: 2.5em;
        padding-left: 10%;
      }

    @media (min-width: 1200px) {
        font-size: 3em;
        padding-left: 20%;
    }
`

export const Subline = styled.h3`
    font-family: "Roboto", Helvetica, sans-serif;
    font-weight: 500;
    font-size: 1em;

    @media (max-width: 500px) {
        padding-left: 5%;
        padding-right: 2%;
      }

    @media (min-width: 501px) {
        padding-left: 10%;
        padding-right: 3%;
      }

    @media (min-width: 1200px) {
        padding-left: 20%;
    }
`