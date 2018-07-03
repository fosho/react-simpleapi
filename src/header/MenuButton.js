import React, { Component } from 'react';
import './MenuButton.css';

class MenuButton extends Component {
    render() {
        return (
            <div className="putmebackdiv">
                <button id="roundButton"
                    onMouseDown={this.props.handleMouseDown}><strong>Hi</strong></button>
                <a>put me back.</a>
            </div>
        );
    }
}

export default MenuButton;