import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

`

export const Label = styled.label`
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    float: left;
    text-align: left;`

export const Button = styled.button`
& {
  appearance: button;
  background-color: #FFDC09;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: 'Montserrat',sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
}

&:after {
  background-clip: padding-box;
  background-color: #ffe12b;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

&:main,
&:focus {
  user-select: auto;
}

&:hover:not(:disabled) {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
}

&:disabled {
  cursor: auto;
}`

export const RenderText = styled.div`
    color: black;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin-left: 2%;
    margin-right: 2%;

    @media only screen and (max-width: 999px) {
        font-size: 1em;
        font-weight: 500;
    }
    

    @media only screen and (min-width: 1000px) {
        font-size: 1.3em;
        font-weight: 500;
    }
    
`

export const Header = styled.h1`
    color: black;
    font-family: 'Montserrat', sans-serif;
    margin-left: 0.5%;
    text-align: center;

    @media only screen and (max-width: 999px) {
        font-size: 1.2em;
    }
    

    @media only screen and (min-width: 1000px) {
        font-size: 1.5em;
    }
`

export const TokenText = styled.p`
    color: black;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    margin-left: 0.5%;
    text-align: center;
    font-size: 0.8em;
`

// Slider Styles

export const SliderContainer = styled.div`
display: flex;
`

export const Range = styled.input`
-webkit-appearance: none;
appearance: none;
background: transparent;
width: 100%;
cursor: pointer;
margin-bottom: 3%;


&:focus {
    outline: none;
}

&::-webkit-slider-runnable-track {
    margin-right: 15px;
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background-image: linear-gradient(to right, #fff3ab, #FFDC09);
    background-repeat: no-repeat;
 }

 &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
 
    /*custom styles*/
    background-color: black;
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
 }

&:focus::-webkit-slider-thumb {   
    border: 1px solid #053a5f;
    outline: 3px solid #053a5f;
    outline-offset: 0.125rem;
}
`

export const Counter = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
`