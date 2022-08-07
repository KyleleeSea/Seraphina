import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    z-index: 5;
    width: 100%;
    padding-right: 1%;
    padding-left: 1%;
    padding-top: 1%;
`

export const Title = styled.a`
    text-decoration: none;
    color: black;
    font-family: "Poppins", Helvetica, sans-serif;
    font-weight: 700;
    @media (max-width: 500px) {
        font-size: 1.4em;
        margin-right: 2%;

      }
    
    @media (min-width: 501px) {
        font-size: 1.7em;
        margin-right: 2%;

      }
    
    @media (min-width: 1200px) {
        font-size: 2em;
        margin-right: 0.75%;
    }

    &:hover {
        color: black;
    }
`

export const Demo = styled.a`
    text-decoration: none;
    color: black;
    font-family: "Poppins", Helvetica, sans-serif;
    font-weight: 500;

    @media (max-width: 500px) {
        font-size: 0.9em;

      }
    
    @media (min-width: 501px) {
        font-size: 1.2em;

      }
    
    @media (min-width: 1200px) {
        font-size: 1.4em;
    }

    &:hover {
        color: #5e5d5d;
    }

`

export const ButtonContainer = styled.button`
float: right;
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
    font-size: 12px;

  }

@media (min-width: 501px) {
    font-size: 15px;
  }

@media (min-width: 1200px) {
    font-size: 17px;
}
`

export const ButtonTop = styled.span`
float: right;
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