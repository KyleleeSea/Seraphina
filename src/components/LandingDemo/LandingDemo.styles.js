import styled from "styled-components";

export const Background = styled.div`
    background-color: black;
    overflow: hidden;

`

export const Padding = styled.div`
    padding-top: 2%;
    padding-right: 2%;
    padding-left: 2%;

    @media (max-width: 500px) {
        paddsng-left: 6%;
      }

    @media (min-width: 501px) {
        padding-left: 4%;
      }

    @media (min-width: 1200px) {
        padding-left: 2%;
    }
    
`
export const Text = styled.h3`
    color: white;
    font-family: "Roboto", Helvetica, sans-serif;
    font-weight: 500;
    font-size: 1.5em;

    @media (max-width: 500px) {
        font-size: 1.2em;
      }

    @media (min-width: 501px) {
        font-size: 1.4em;
      }

    @media (min-width: 1200px) {
        font-size: 1.5em;
    }
`

export const Header = styled.h1`
    color: white;
    font-family: "Poppins", Helvetica, sans-serif;
    font-weight: 700;

    @media (max-width: 500px) {
        font-size: 1.2em;
      }

    @media (min-width: 501px) {
        font-size: 1.4em;
      }

    @media (min-width: 1200px) {
        font-size: 2em;
    }
`

export const SliderContainer = styled.div`
display: flex;
`

export const Range = styled.input`
-webkit-appearance: none;
appearance: none;
background: transparent;
width: 100%;
cursor: pointer;
margin-bottom: 1%;


&:focus {
    outline: none;
}

&::-webkit-slider-runnable-track {
    margin-right: 15px;
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background-repeat: no-repeat;
 }

 &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
 
    /*custom styles*/
    background-color: white;
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
 }

&:focus::-webkit-slider-thumb {   
    border: 1px solid white;
    outline: 3px solid white;
    outline-offset: 0.125rem;
}
`

export const Counter = styled.div`
    font-family: "Poppins", Helvetica, sans-serif;
    font-weight: 700;
    color: white;
`

export const PromptText = styled.div`
    color: #eeeee4;
    font-family: "Roboto", Helvetica, sans-serif;
    font-weight: 300;
    padding-bottom: 2%;

    // !import overrides the inline style
    &:hover {
        color: white !important;
    }

    @media (max-width: 500px) {
        font-size: 0.8em;
      }

    @media (min-width: 1200px) {
        font-size: 1.2em;
    }
`

export const OutputText = styled.div`
    color: white;
    font-family: "Roboto", Helvetica, sans-serif;
    font-weight: 400;
    margin-left: 1%;
    margin-right: 1%;
    padding-bottom: 2%;
`

export const OutputBox = styled.div`
    border: 7px double #FFFFFF;
    margin-right: 2%;

    @media (max-width: 500px) {
        font-size: 0.8em;
      }

    @media (min-width: 1200px) {
        font-size: 1.2em;
    }
`