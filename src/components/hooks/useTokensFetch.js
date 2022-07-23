import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const useTokensFetch = () => {
    const [tokens, setTokens] = useState('');
    var { user } = useAuth0();

    useEffect(() => {
        setTokens(user['http://localhost:3000/user_metadata'].tokens)
    })
    return { tokens, setTokens };

};


// Write to sessionStorage