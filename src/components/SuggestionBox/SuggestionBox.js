import React from "react";
import { Component } from "react";
import { Container, Label, Button, RenderText, Header, TokenText } from "./SuggestionBox.styles.js";
import Slider from "../Slider/Slider.js";
import TextInput from "../Textarea/Textarea.js";

import { Configuration, OpenAIApi } from 'openai';
import Loading from "../Loading/Loading.js";
import Inspiration from '../Inspiration/Inspiration.js';

class SuggestionBox extends Component {

    constructor() {
        super()
        this.state = {
            response: ""
        }
    }

    onFormSubmit = async e => {
        e.preventDefault()

        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.input)

        let num = parseInt(formDataObj.num);
        let componentArray = []

        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        for (let i = 0; i < num; i++) {
            this.setState({
                response: <Loading i={i} num={num} />
            })

            const response = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: `Suggest one completion to the writing excerpt preceded by \"Prompt:\".\n\nPrompt: Rare was it that Hisao found letters buried in Saipan. He dropped his shovel and knelt, the archaeology team at work behind him—industrial lights illuminated the tunnel with a silver glow. Brushing the dirt from his find, Hisao picked up a timeworn book with a withered cover. A loose page stuck out from the side.\nOutput: I’m going to surrender at dawn… a sentence read. “I got somethi…” Hisao trailed off. Curiosity once again bested him. With careful fingers, he opened the book and read off the first page.\n\nPrompt: My wife considers for another century-second. “Okay, sure.” We take our first steps across the highway and, suddenly, we are standing in the path of the giant tractor, surrounded by tall grass.\nOutput: Two hundred feet traveled in a blink. My wife smiles and asks if we just did magic. “It’s all magic,” I say — even though, before the rock, I didn’t believe in anything I couldn’t prove with each of my senses.\n\nPrompt: John Claverhouse was a moon-faced man. You know the kind—cheek-bones wide apart, chin and forehead melting into the cheeks to complete the perfect round, and the nose, broad and pudgy, equidistant from the circumference, flattened against the very centre of the face like a dough-ball upon the ceiling. \nOutput: Perhaps that is why I hated him, for truly he had become an offense to my eyes, and I believed the earth to be cumbered with his presence. Perhaps my mother may have been superstitious of the moon and looked upon it over the wrong shoulder at the wrong time.\n\nPrompt: ${formDataObj.input}\nOutput: `,
                temperature: 0.6,
                max_tokens: 100,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0,
            })
            componentArray.push(<Inspiration text={response.data.choices[0].text} i={i} />)
        }
        console.log(componentArray);
        this.setState({
            response: componentArray
        })
    }



    render() {
        return (
            <div>
                <Header>Creative Writing Inspiration Generator</Header>
                <Container>
                    <form onSubmit={this.onFormSubmit}>
                        <Label>Number of Outputs:</Label>
                        <br />
                        <Slider />

                        <Label>Paragraph of Your Writing:</Label>
                        <TextInput />
                        <Button type="submit">
                            Generate Inspiration
                        </Button>
                        <TokenText>Tokens to Generate: x. Tokens Remaining: {this.props.tokens}.</TokenText>
                    </form>
                </Container>
                <RenderText>
                    {this.state.response}
                </RenderText>
            </div>
        )
    }
}

export default SuggestionBox;