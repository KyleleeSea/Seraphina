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

        const num_tokens = 100 * parseInt(formDataObj.num)

        this.setState({
            response: "Response shown here"
        })

        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        openai.createCompletion({
            model: "text-davinci-002",
            prompt: `Suggest ${formDataObj.num} different completions to the writing excerpt preceded by "Prompt:".\n\nPrompt: Rare was it that Hisao found letters buried in Saipan. He dropped his shovel and knelt, the archaeology team at work behind him—industrial lights illuminated the tunnel with a silver glow. Brushing the dirt from his find, Hisao picked up a timeworn book with a withered cover. A loose page stuck out from the side.\nOutput:\n1. I’m going to surrender at dawn… a sentence read. “I got somethi…” Hisao trailed off. Curiosity once again bested him. With careful fingers, he opened the book and read off the first page.\n\n2. It was nearly impossible for Hisao to contain his impatience to peruse the book, but following the strict protocols, he reached for a bag to protect the book until it could be examined later. However, the edge of the loose page caught and fluttered to the ground before he could prevent it. Shining his torch on the page, he bent down to take a closer look. \n\nPrompt:${formDataObj.input}\nOutput: `,
            temperature: 0.7,
            max_tokens: num_tokens,
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



    render() {
        return (
            <div>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Number of Outputs:</Form.Label>
                        <Form.Select aria-label="Default select example" name="num" required>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="6">Six</option>
                            <option value="7">Seven</option>
                            <option value="8">Eight</option>
                            <option value="9">Nine</option>
                            <option value="10">Ten</option>

                        </Form.Select>
                        <Form.Label>Enter passage:</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Passage"
                            style={{ height: '100px' }}
                            name="input"
                            required
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