import React from "react";
import { Component } from "react";
import LandingNav from "../components/Navbar/LandingNavbar.js"
import LandingHeader from "./LandingHeader/LandingHeader.js";

class Landing extends Component {
    render() {
        return (
            <div>
                <LandingNav />
                <LandingHeader />
            </div>
        )
    }
}

export default Landing;