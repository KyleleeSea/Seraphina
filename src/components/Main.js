import React from "react";
import { Component } from "react";
import SuggestionBox from "./SuggestionBox/SuggestionBox.js";
import Navigation from './Navbar/Navbar.js'
import { withAuthenticationRequired } from '@auth0/auth0-react';

class Main extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <SuggestionBox />
            </div>
        )
    }
}

export default withAuthenticationRequired(Main, {
    returnTo: "http://localhost:3000/generate"
});