import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Navigation from '../Navbar/Navbar.js'
import { Container, Row, Card, Col } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import React, { useState } from "react";

import { useTokensFetch } from "../hooks/useTokensFetch.js";

function Pricing() {
    const { user, getAccessTokenSilently } = useAuth0();

    // const current_tokens = user['http://localhost:3000/user_metadata'].tokens;

    const { tokens, setTokens } = useTokensFetch()
    console.log(user['http://localhost:3000/user_metadata'])

    const updateUserMetadata = async (num_add) => {
        const domain = process.env.REACT_APP_AUTH0_DOMAIN;

        try {
            const accessToken = await getAccessTokenSilently({
                audience: `https://${domain}/api/v2/`,
                scope: "update:current_user_metadata"
            });

            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

            const { user_metadata } = await (
                await fetch(userDetailsByIdUrl, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_metadata: { tokens: tokens + num_add },
                    }),
                })
            ).json();

        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENTID }}>
            <Navigation />
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