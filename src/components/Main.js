import React from "react";
import SuggestionBox from "./SuggestionBox/SuggestionBox.js";
import Navigation from './Navbar/Navbar.js'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

// Generate page

function Main() {
    const { user, getAccessTokenSilently } = useAuth0();
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

    return (
        <div>
            <Navigation tokens={tokens} />
            {/* Passing setTokens as props allows child component SuggestionBox to setTokens in Main parent component */}
            <SuggestionBox tokens={tokens} setTokens={setTokens} />
        </div>
    )
}

// returnTo set to production URL
export default withAuthenticationRequired(Main, {
    returnTo: "https://seraphinai.com/generate"
});