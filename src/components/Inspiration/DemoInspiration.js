import React from "react";
import { Component } from "react";
import { OutputText } from './DemoInspiration.styles';

class Inspiration extends Component {
    render() {
        return (
            <OutputText>
                {this.props.text}
                <br />
            </OutputText>
        )
    }
}

export default Inspiration;