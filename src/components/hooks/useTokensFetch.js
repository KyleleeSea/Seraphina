import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const useTokensFetch = () => {

    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
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

                const test = await metadataResponse.json();

                console.log(test)

                // setTokens(user_metadata.tokens);
            } catch (e) {
                console.log(e.message);
            }
        };
        getTokens();
    }, [getAccessTokenSilently, user?.sub]);

    return { tokens, setTokens }

};

