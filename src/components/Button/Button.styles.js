import styled from "styled-components";

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