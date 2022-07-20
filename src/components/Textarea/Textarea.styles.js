import styled from "styled-components";

export const TextArea = styled.textarea`
    max-width: 100%;
    min-height: 300px;
    height: 100%;
    width: 100%;

    @media only screen and (min-width: 320px) {
        min-width: 300px;
    }

    @media only screen and (min-width: 375px) {
        min-width: 320px;
    }

    @media only screen and (min-width: 425px) {
        min-width: 375px;
    }

    @media only screen and (min-width: 600px) {
        min-width: 425px;
    }

    @media only screen and (min-width: 768px) {
        min-width: 600px;
    }

    @media only screen and (min-width: 900px) {
        min-width: 768px;
    }

    @media only screen and (min-width: 1024px) {
        min-width: 900px;
    }

    @media only screen and (min-width: 1440px) {
        min-width: 1024px;
    }

    @media only screen and (min-width: 1800px) {
        min-width: 1440px;
    }
    `

export const Text = styled.p`
    text-align: center;
`