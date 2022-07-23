import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Navigation from '../Navbar/Navbar.js'
import { Container, Row, Card, Col } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import React, { useEffect, useState } from "react";

function Pricing() {
    const { user, getAccessTokenSilently } = useAuth0();
    const [tokens, setTokens] = useState('');

    useEffect(() => {
        const getTokens = async () => {
            const domain = process.env.REACT_APP_AUTH0_DOMAIN;

            try {
                const accessToken = await getAccessTokenSilently({
                    audience: `https://${domain}/api/v2/`,
                    scope: "read:current_user",
                });

                console.log(user)
                const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const userObject = await metadataResponse.json();

                setTokens(userObject.user_metadata.tokens);
            } catch (e) {
                console.log(e.message);
            }
        };
        getTokens();
    }, [getAccessTokenSilently, user?.sub]);


    const updateUserMetadata = async (num_add) => {
        const domain = process.env.REACT_APP_AUTH0_DOMAIN;

        // Makes API call to auth0 to update metadata
        try {
            const accessToken = await getAccessTokenSilently({
                audience: `https://${domain}/api/v2/`,
                scope: "update:current_user_metadata"
            });
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

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
                        user_metadata: { tokens: tokenCounter + num_add },
                    }),
                })
            ).json();
            setTokens(tokenCounter + num_add)

        } catch (e) {
            console.log(e.message);
        }
    };


    return (
        <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENTID }}>
            <Navigation tokens={tokens} />
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: "1.99",
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            updateUserMetadata(250)
                                        });
                                    }}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </PayPalScriptProvider>
    );
}

export default withAuthenticationRequired(Pricing, {
    returnTo: "http://localhost:3000/generate"
});