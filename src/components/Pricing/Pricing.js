import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Navigation from "../../Navbar/Navbar.js";
import { Container, Row, Card, Col } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Auth0Lock from "auth0-lock";

function Pricing() {
    const { user } = useAuth0();

    console.log(user)
    console.log(user['http://localhost:3000/app_metadata'].tokens)

    const lock = new Auth0Lock(
        process.env.REACT_APP_AUTH0_CLIENT_ID,
        process.env.REACT_APP_AUTH0_DOMAIN
    );

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
                                            // user.app_metadata.tokens = user.app_metadata.tokens + 250;
                                            // auth0.users.updateUserMetadata(user.user_id, user.user_metadata)

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