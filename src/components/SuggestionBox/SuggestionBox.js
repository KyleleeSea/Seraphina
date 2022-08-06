import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from 'openai';
import { useAuth0 } from '@auth0/auth0-react';

// Styles
import { Container, Label, Button, RenderText, Header, TokenText, SliderContainer, Range, Counter } from "./SuggestionBox.styles.js";

// Components
import Loading from "../Loading/Loading.js";
import Inspiration from '../Inspiration/Inspiration.js';
import TextInput from "../Textarea/Textarea.js";

export default function SuggestionBox(props) {
    const [response, setResponse] = useState("");
    const [tokensToGen, setTokensToGen] = useState(1);

    const { user, getAccessTokenSilently } = useAuth0();

    // Helper function
    const updateUserMetadata = async (num_remove) => {
        const domain = process.env.REACT_APP_AUTH0_DOMAIN;

        // Makes API call to auth0 to update metadata
        try {
            const accessToken = await getAccessTokenSilently({
                audience: `https://${domain}/api/v2/`,
                scope: "update:current_user_metadata"
            });
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

            // Get local user token data with API call for comparison
            const currentMetadata = await fetch(userDetailsByIdUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            const currentMetadataJson = await currentMetadata.json();

            const tokenCounter = currentMetadataJson.user_metadata.tokens

            const { user_metadata } = await (
                await fetch(userDetailsByIdUrl, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_metadata: { tokens: tokenCounter - num_remove },
                    }),
                })
            ).json();

            props.setTokens(tokenCounter - num_remove)

        } catch (e) {
            console.log(e.message);
        }
    };

    // OpenAI Call function
    const onFormSubmit = async (e) => {
        e.preventDefault()
        const domain = process.env.REACT_APP_AUTH0_DOMAIN;

        // Check user tokens 
        try {
            const accessToken = await getAccessTokenSilently({
                audience: `https://${domain}/api/v2/`,
                scope: "update:current_user_metadata"
            });
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

            // Get local user token data with API call for comparison
            const currentMetadata = await fetch(userDetailsByIdUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            const currentMetadataJson = await currentMetadata.json();

            const tokenCounter = currentMetadataJson.user_metadata.tokens

            // If user has enough tokens, execute OpenAI calls 
            if (tokenCounter >= tokensToGen) {
                const formData = new FormData(e.target),
                    formDataObj = Object.fromEntries(formData.entries())
                console.log(formDataObj.input)

                let num = parseInt(formDataObj.num);
                let componentArray = []

                const configuration = new Configuration({
                    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
                });
                const openai = new OpenAIApi(configuration);

                // Remove tokens from user
                updateUserMetadata(tokensToGen)

                for (let i = 0; i < num; i++) {
                    setResponse(<Loading i={i} num={num} />)

                    const response = await openai.createCompletion({
                        model: "davinci:ft-personal-2022-07-30-05-34-47",
                        prompt: `${formDataObj.input.replace("prompt: ", '')}`,
                        temperature: 0.6,
                        max_tokens: 50,
                        top_p: 1,
                        frequency_penalty: 0.5,
                        presence_penalty: 0
                    })
                    // Fine tuned model returns ###, the replace removes. 
                    componentArray.push(<Inspiration text={response.data.choices[0].text.replaceAll('#', '')} i={i} key={i} />)
                }
                setResponse(componentArray)
            }

            else {
                setResponse(<p>You do not have enough tokens to execute!</p>)
            }

        } catch (e) {
            console.log(e.message);
        }

    }

    // Slider value 
    useEffect(() => {
        const ele = document.querySelector('.buble');
        if (ele) {
            ele.style.left = `${Number(tokensToGen / 4)}px`;
        }
    })

    return (
        <div className="mt-3">
            <Header>Creative Writing Inspiration Generator</Header>
            <Container>
                <form onSubmit={onFormSubmit}>
                    <Label>Number of Outputs:</Label>
                    <br />
                    {/* Slider Object */}
                    <SliderContainer>
                        <Range type="range" min="1" max="5" step="1" value={tokensToGen} required name="num"
                            onChange={({ target: { value: radius } }) => {
                                setTokensToGen(radius);
                            }}
                        />
                        <Counter className="buble">
                            {tokensToGen}
                        </Counter>
                    </SliderContainer>
                    {/* End of Slider Object */}
                    <Label>Paragraph of Your Writing:</Label>
                    <TextInput />
                    <Button type="submit">
                        Generate Inspiration
                    </Button>
                    {/* Style sets color to red if  there are less tokens in user's balance than tokens needed to generate inspiration*/}
                    <TokenText style={{ color: (tokensToGen <= props.tokens ? '' : '#8c0200') }}>Tokens to Generate: {tokensToGen}. Tokens Remaining: {props.tokens}.</TokenText>
                </form>
            </Container>
            <RenderText>
                {response}
            </RenderText>
        </div>
    )
}
