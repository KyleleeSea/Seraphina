import Typed from 'react-typed';
import React from "react";
import { Component } from "react";

// Loading component while API is fetching for SuggestionBox.js
class Loading extends Component {
    render() {
        return (
            <div>
                Generating Inspiration {this.props.i + 1}/{this.props.num}
                <Typed strings={['...']} loop typeSpeed={300} />
            </div>
        )
    }
}

export default Loading;