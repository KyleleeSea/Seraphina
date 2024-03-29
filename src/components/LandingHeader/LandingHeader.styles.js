import styled from "styled-components";
import LandingImage from '../../assets/LandingImage.jpg'

export const BackgroundImage = styled.div`
    background-image: url(${LandingImage});
    background-blend-mode: overlay;
    background-size: cover; 
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


export const ButtonContainer = styled.button`
--button_radius: 0.75em;
--button_color: #e8e8e8;
--button_outline_color: #000000;
font-weight: bold;
border: none;
border-radius: var(--button_radius);
background: var(--button_outline_color);
position: relative;
margin-top: 1%;

@media (max-width: 500px) {
    left:5%;
    font-size: 12px;

  }

@media (min-width: 501px) {
    left:10%;
    font-size: 15px;
  }

@media (min-width: 1200px) {
    left:20%;
    font-size: 17px;
}
`

export const ButtonTop = styled.span`
display: block;
box-sizing: border-box;
border: 2px solid var(--button_outline_color);
border-radius: var(--button_radius);
padding: 0.75em 1.5em;
background: var(--button_color);
color: var(--button_outline_color);
transform: translateY(-0.2em);
transition: transform 0.1s ease;

&:hover {
    transform: translateY(-0.33em);
}

&:active {
    transform: translateY(0);
}
`