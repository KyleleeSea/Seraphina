import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Navigation from '../Navbar/Navbar.js'
import { Container, Row, Card, Col } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import React, { useEffect, useState } from "react";

// Images
import MidTier from '../../assets/MidTier.jpg'
import LowTier from '../../assets/LowTier.jpg'
import TopTier from '../../assets/TopTier.png'

// Styles
import { Text } from "./Pricing.styles.js";

function Pricing() {
    const { user, getAccessTokenSilently } = useAuth0();
    // Tokens being initialized to '' doesn't impact functionality, since the token reference in update function has its own API call 
    const [tokens, setTokens] = useState('');

    // Set tokens state 
    useEffect(() => {
        const getTokens = async () => {
            const domain = process.env.REACT_APP_AUTH0_DOMAIN;

            try {
                const accessToken = await getAccessTokenSilently({
                    audience: `https://${domain}/api/v2/`,
                    scope: "read:current_user",
                });

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
                        user_metadata: { tokens: tokenCounter + num_add },
                    }),
                })
            ).json();
            // Trigger rerender
            setTokens(tokenCounter + num_add)

        } catch (e) {
            console.log(e.message);
        }
    };


    return (
        <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENTID }}>
            <Navigation tokens={tokens} className="mb-5" />
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Text>50 Tokens</Text>
                                <Text>$4.99</Text>
                                <Card.Img src={LowTier} variant="top" />
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: "4.99",
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            updateUserMetadata(50)
                                            alert(`Transaction completed successfully! You now have +50 tokens`)
                                        });
                                    }}
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Body>
                                <Text>125 Tokens</Text>
                                <Text>$9.99</Text>

                                <Card.Img src={MidTier} variant="top" />
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: "9.99",
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            updateUserMetadata(125)
                                            alert(`Transaction completed successfully! You now have +125 tokens`)
                                        });
                                    }}
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Body>
                                <Text>450 Tokens</Text>
                                <Text>$29.99</Text>

                                <Card.Img src={TopTier} variant="top" />
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: "29.99",
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            updateUserMetadata(450)
                                            alert(`Transaction completed successfully! You now have +450 tokens`)
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