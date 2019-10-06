import React, { Component } from 'react';

class Toggle extends Component {
    constructor(){
        super();
        this.state = {
            toggle: true
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            toggle: !this.state.toggle
        })
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.toggle ? "ON" : "OFF"}</button>
            </div>
        );
    }
}

export default Toggle;