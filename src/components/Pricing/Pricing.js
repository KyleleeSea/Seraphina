import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Pricing = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);


    useEffect(() => {
        const getUserMetadata = async () => {
            const domain = "seraphina.us.auth0.com";

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

                const { user_metadata } = await metadataResponse.json();

                setUserMetadata(user_metadata);
            } catch (e) {
                console.log(e.message);
            }
        };

        getUserMetadata();
    }, [getAccessTokenSilently, user?.sub]);

    const updateUserMetadata = async () => {
        const domain = "seraphina.us.auth0.com";

        try {
            const accessToken = await getAccessTokenSilently({
                audience: `https://${domain}/api/v2/`,
                scope: "update:current_user_metadata",
                ignoreCache: true,
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
                        user_metadata: { tokens: 15 },
                    }),
                })
            ).json();

            setUserMetadata(user_metadata);
        } catch (e) {
            console.log(e.message);
        }
    };


    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <h3>User Metadata</h3>
                {userMetadata ? (
                    <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                ) : (
                    "No user metadata defined"
                )}
            </div>
        )
    );
};

export default Pricing;


// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import Navigation from "../../Navbar/Navbar.js";
// import { Container, Row, Card, Col } from "react-bootstrap";
// import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
// import Auth0Lock from "auth0-lock";

// function Pricing() {
//     const { user } = useAuth0();

//     // console.log(user)
//     // console.log(user['http://localhost:3000/app_metadata'].tokens)

//     const lock = new Auth0Lock(
//         process.env.REACT_APP_AUTH0_CLIENT_ID,
//         process.env.REACT_APP_AUTH0_DOMAIN
//     );

//     var accessToken = null;
//     var profile = null;


//     lock.on('authenticated', function (authResult) {
//         lock.getUserInfo(authResult.accessToken, function (error, profileResult) {
//             if (error) {
//                 console.log(error)
//                 return;
//             }

//             accessToken = authResult.accessToken;
//             profile = profileResult;

//             // Update DOM
//             lock.getUserInfo(accessToken, function (error, profile) {
//                 if (!error) {
//                     alert('hello ' + profile.name);
//                 }
//             });
//         });
//     });


//     return (
//         <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENTID }}>
//             <Navigation />
//             <Container>
//                 <Row>
//                     <Col>
//                         <Card>
//                             <Card.Body>
//                                 <PayPalButtons
//                                     createOrder={(data, actions) => {
//                                         return actions.order.create({
//                                             purchase_units: [
//                                                 {
//                                                     amount: {
//                                                         value: "1.99",
//                                                     },
//                                                 },
//                                             ],
//                                         });
//                                     }}
//                                     onApprove={(data, actions) => {
//                                         return actions.order.capture().then((details) => {
//                                             // user.app_metadata.tokens = user.app_metadata.tokens + 250;
//                                             // auth0.users.updateUserMetadata(user.user_id, user.user_metadata)

//                                         });
//                                     }}
//                                 />
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </PayPalScriptProvider>
//     );
// }

// export default withAuthenticationRequired(Pricing, {
//     returnTo: "http://localhost:3000/generate"
// });