import React from "react";
import { Component } from "react";
import LandingNav from "../components/Navbar/LandingNavbar.js"

class Landing extends Component {
    render() {
        return (
            <div>
                <LandingNav />
                <h1>Landing</h1>
            </div>
        )
    }
}

export default Landing;