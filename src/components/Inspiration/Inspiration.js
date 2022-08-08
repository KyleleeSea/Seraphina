import React from "react";
import { Component } from "react";

// Text component for SuggestionBox.js outputs 
class Inspiration extends Component {
    render() {
        return (
            <div>
                {this.props.i + 1}. {this.props.text}
                <br />
            </div>
        )
    }
}

export default Inspiration;