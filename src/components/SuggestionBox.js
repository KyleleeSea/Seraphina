import React from "react";
import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { Configuration, OpenAIApi } from 'openai';

class SuggestionBox extends Component {
    constructor() {
        super()
        this.state = {
            response: "...Await response"
        }
    }

    onFormSubmit = e => {
        e.preventDefault()

        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.input)

        this.setState({
            response: "Response shown here"
        })

        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        if (formDataObj.num == "1") {
            openai.createCompletion({
                model: "text-davinci-002",
                prompt: `Suggest one completion to the writing excerpt preceded by \"Prompt:\".\n\nPrompt: Rare was it that Hisao found letters buried in Saipan. He dropped his shovel and knelt, the archaeology team at work behind him—industrial lights illuminated the tunnel with a silver glow. Brushing the dirt from his find, Hisao picked up a timeworn book with a withered cover. A loose page stuck out from the side.\nOutput: I’m going to surrender at dawn… a sentence read. “I got somethi…” Hisao trailed off. Curiosity once again bested him. With careful fingers, he opened the book and read off the first page.\n\nPrompt: My wife considers for another century-second. “Okay, sure.” We take our first steps across the highway and, suddenly, we are standing in the path of the giant tractor, surrounded by tall grass.\nOutput: Two hundred feet traveled in a blink. My wife smiles and asks if we just did magic. “It’s all magic,” I say — even though, before the rock, I didn’t believe in anything I couldn’t prove with each of my senses.\n\nPrompt: John Claverhouse was a moon-faced man. You know the kind—cheek-bones wide apart, chin and forehead melting into the cheeks to complete the perfect round, and the nose, broad and pudgy, equidistant from the circumference, flattened against the very centre of the face like a dough-ball upon the ceiling. \nOutput: Perhaps that is why I hated him, for truly he had become an offense to my eyes, and I believed the earth to be cumbered with his presence. Perhaps my mother may have been superstitious of the moon and looked upon it over the wrong shoulder at the wrong time.\n\nPrompt: ${formDataObj.input}\nOutput: `,
                temperature: 0.7,
                max_tokens: 100,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            }).then((response) => {
                this.setState({
                    response: `${response.data.choices[0].text}`
                })
            })
        }

        if (formDataObj.num == "2") {
            openai.createCompletion({
                model: "text-davinci-002",
                prompt: `Suggest two different completions to the writing excerpt preceded by "Prompt:".\n\nPrompt: Rare was it that Hisao found letters buried in Saipan. He dropped his shovel and knelt, the archaeology team at work behind him—industrial lights illuminated the tunnel with a silver glow. Brushing the dirt from his find, Hisao picked up a timeworn book with a withered cover. A loose page stuck out from the side.\nOutput:\n1. I’m going to surrender at dawn… a sentence read. “I got somethi…” Hisao trailed off. Curiosity once again bested him. With careful fingers, he opened the book and read off the first page.\n\n2. It was nearly impossible for Hisao to contain his impatience to peruse the book, but following the strict protocols, he reached for a bag to protect the book until it could be examined later. However, the edge of the loose page caught and fluttered to the ground before he could prevent it. Shining his torch on the page, he bent down to take a closer look. \n\nPrompt:${formDataObj.input}\nOutput: `,
                temperature: 0.7,
                max_tokens: 200,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0
            })
                .then((response) => {
                    this.setState({
                        response: `${response.data.choices[0].text}`
                    })
                });
        }

        if (formDataObj.num == "3") {
            openai.createCompletion({
                model: "text-davinci-002",
                prompt: `Suggest three different completions to the writing excerpt preceded by "Prompt:".\n\nPrompt: Rare was it that Hisao found letters buried in Saipan. He dropped his shovel and knelt, the archaeology team at work behind him—industrial lights illuminated the tunnel with a silver glow. Brushing the dirt from his find, Hisao picked up a timeworn book with a withered cover. A loose page stuck out from the side.\nOutput:\n1. I’m going to surrender at dawn… a sentence read. “I got somethi…” Hisao trailed off. Curiosity once again bested him. With careful fingers, he opened the book and read off the first page.\n\n2. It was nearly impossible for Hisao to contain his impatience to peruse the book, but following the strict protocols, he reached for a bag to protect the book until it could be examined later. However, the edge of the loose page caught and fluttered to the ground before he could prevent it. Shining his torch on the page, he bent down to take a closer look. \n\n3. Turning the book toward the lights, Hisao quickly scanned the words scrawled on the inside cover. Could it be? He nearly dropped the book in his excitement. If this was indeed the family’s book of records, it would validate his many years of research and excavation. \n\nPrompt:${formDataObj.input}\nOutput: `,
                temperature: 0.7,
                max_tokens: 300,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0
            })
                .then((response) => {
                    this.setState({
                        response: `${response.data.choices[0].text}`
                    })
                });
        }

        if (formDataObj.num == "4") {
            openai.createCompletion({
                model: "text-davinci-002",
                prompt: `Suggest four different completions to the writing excerpt preceded by \"Prompt:\".\n\nPrompt: Rare was it that Hisao found letters buried in Saipan. He dropped his shovel and knelt, the archaeology team at work behind him—industrial lights illuminated the tunnel with a silver glow. Brushing the dirt from his find, Hisao picked up a timeworn book with a withered cover. A loose page stuck out from the side.\nOutput:\n1. I’m going to surrender at dawn… a sentence read. “I got somethi…” Hisao trailed off. Curiosity once again bested him. With careful fingers, he opened the book and read off the first page.\n\n2. It was nearly impossible for Hisao to contain his impatience to peruse the book, but following the strict protocols, he reached for a bag to protect the book until it could be examined later. However, the edge of the loose page caught and fluttered to the ground before he could prevent it. Shining his torch on the page, he bent down to take a closer look. \n\n3. Turning the book toward the lights, Hisao quickly scanned the words scrawled on the inside cover. Could it be? He nearly dropped the book in his excitement. If this was indeed the family’s book of records, it would validate his many years of research and excavation. \n\n4. \"What have you got there?\" Hisao's supervisor, Nakamura, called out as he made his way over. \"Let me see that,\" Nakamura said, taking the book from Hisao's hands. \"Hmm, this is interesting. I've never seen anything like it before.\" \n\nPrompt: ${formDataObj.input}\nOutput: `,
                temperature: 0.7,
                max_tokens: 400,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            }).then((response) => {
                this.setState({
                    response: `${response.data.choices[0].text}`
                })
            });
        }
    }



    render() {
        return (
            <div>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group className="mb-3">
                        <option>Number of Outputs</option>
                        <Form.Select aria-label="Default select example" name="num">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>

                        </Form.Select>
                        <Form.Label>Enter passage:</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Passage"
                            style={{ height: '100px' }}
                            name="input"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h1>
                                Placeholder
                            </h1>
                        </Card.Title>
                        <Card.Text>
                            <h4>
                                {this.state.response}
                            </h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export default SuggestionBox;