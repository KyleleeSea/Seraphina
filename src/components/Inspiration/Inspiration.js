import React from "react";
import { Component } from "react";

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