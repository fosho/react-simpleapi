import React, { Component } from 'react';
import MenuButton from './MenuButton';
import MenuBar from './MenuBar';
import Menu from './Menu';

class MenuContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown} />
                <Menu handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible} />
                {/* <MenuBar /> */}
            </div>
        );
    }
}

export default MenuContainer;