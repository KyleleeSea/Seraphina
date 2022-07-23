import React from "react";
import SuggestionBox from "./SuggestionBox/SuggestionBox.js";
import Navigation from './Navbar/Navbar.js'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function Main() {
    const { user } = useAuth0();

    // Hardcoded link value, must be changed later. 
    var tokens = user['http://localhost:3000/user_metadata'].tokens

    return (
        <div>
            <Navigation tokens={tokens} />
            <SuggestionBox tokens={tokens} />
        </div>
    )
}

export default withAuthenticationRequired(Main, {
    returnTo: "http://localhost:3000/generate"
});