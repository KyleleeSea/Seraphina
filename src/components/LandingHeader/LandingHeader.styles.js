import styled from "styled-components";
import LandingImage from '../../assets/LandingImage.jpg'

export const Container = styled.div`
    overflow: hidden;
`

export const BackgroundVideo = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -5;
`

export const BackgroundImage = styled.div`
    background-image: url(${LandingImage});
    background-blend-mode: overlay;
    background-size: cover; 

    position: fixed; 
    top: 0; 
    left: 0; 
  
    /* Preserve aspect ratio */
    min-width: 100%;
    min-height: 100%;

    /* Align items */
    align-items: center;
`

export const Headline = styled.h1`
    font-family: "Poppins", Helvetica, sans-serif;
    font-weight: 700;
    font-size: 3em;
    position: relative;
    left: 20%;

    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`

export const Subline = styled.h3`
    font-family: "Roboto", Helvetica, sans-serif;
    font-weight: 500;
    font-size: 1em;
    position: relative;
    left: 20%;

    position: absolute;
    top: 55%;
    -ms-transform: translateY(-55%);
    transform: translateY(-55%);
`