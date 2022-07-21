import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Navigation from "../../Navbar/Navbar.js";
import { Container, Row, Card, Col } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function Pricing() {
    const { user } = useAuth0();

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
                    {/* <Col>
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
                                            const name = details.payer.name.given_name;
                                            alert(`Transaction completed by ${name}`);
                                        });
                                    }}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
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
                                            const name = details.payer.name.given_name;
                                            alert(`Transaction completed by ${name}`);
                                        });
                                    }}
                                />
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </PayPalScriptProvider>
    );
}

export default withAuthenticationRequired(Pricing, {
    returnTo: "http://localhost:3000/generate"
});