import React from "react";
import { Component } from "react";
import Navigation from "../Navbar/Navbar.js";
import { withAuthenticationRequired } from '@auth0/auth0-react';

class Landing extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <h1>Landing</h1>
            </div>
        )
    }
}

export default Landing;