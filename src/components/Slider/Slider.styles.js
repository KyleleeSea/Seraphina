import styled from "styled-components";

export const Container = styled.div`
display: flex;
`

export const Range = styled.input`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
background: transparent;
width: 100%;
cursor: pointer;
margin-bottom: 3%;


&:focus {
    outline: none;
}

&::-moz-range-track {
    margin-right: 15px;
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background-repeat: no-repeat; 
}

&::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none;
 
    /*custom styles*/
    background-color: white;
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
}

&:focus::-moz-range-thumb {
    border: 1px solid white;
    outline: 3px solid white;
    outline-offset: 0.125rem;
}

&::-webkit-slider-runnable-track {
    margin-right: 15px;
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background-color: linear-gradient(to right, #fff3ab, #FFDC09);
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