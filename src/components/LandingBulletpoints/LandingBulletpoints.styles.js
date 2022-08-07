import styled from "styled-components";

export const Image = styled.img`
    width: 100px;
    height: 100px;
`

export const Wrapper = styled.div`
    height: 80vh;
    display: table;
    margin: 0 auto;
    margin-top: 5%;
`

export const InnerWrapper = styled.div`
    display: table-cell; 
    vertical-align: middle; 
`

export const CTAWrapper = styled.div`
    text-align: center;
    margin-top: 5%;
`

export const Text = styled.div`
    color: black;
    font-family: "Roboto", Helvetica, sans-serif;
    font-weight: 500;

    @media (max-width: 500px) {
        font-size: 1.2em;
    }

    @media (min-width: 501px) {
        font-size: 1.2em;
    }

    @media (min-width: 1200px) {
        font-size: 1.5em;
    }
`

export const CTAText = styled.div`
    color: black;
    font-family: "Poppins", Helvetica, sans-serif;
    font-weight: 700;

    @media (max-width: 500px) {
        font-size: 1.5em;
    }

    @media (min-width: 501px) {
        font-size: 1.8em;
    }

    @media (min-width: 1200px) {
        font-size: 2em;
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
    font-size: 18px;

  }

@media (min-width: 501px) {
    font-size: 22px;
  }

@media (min-width: 1200px) {
    font-size: 25px;
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
