import React from "react";
import { Component } from "react";
import SuggestionBox from "./SuggestionBox/SuggestionBox.js";
import Navigation from "../Navbar/Navbar.js";

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

export default Main;