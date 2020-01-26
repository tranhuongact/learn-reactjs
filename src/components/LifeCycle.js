import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        console.log("LifeCycle contructor");
    }

    decreaseCounter = () => {
        this.setState((state) => ({
            counter: state.counter - 1
        }))
    }

    increaseCounter = () => {
        this.setState({
            counter : this.state.counter + 1
        })
    }

    componentDidMount() {
        console.log("LifeCycle Did Mount");
        this.setState({
            counter : 5
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps", state);
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("LifeCycle shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("LifeCycle Did Update");
    }

    componentWillUnmount() {
        console.log("LifeCycle Will Unmount");
    }

    render() {
        var myStyle = {
            color: 'green',
            fontSize : 18
        }
        return (
            <div>
                <button onClick={this.decreaseCounter}>-</button>
                <span style={myStyle}>&nbsp;{this.state.counter}&nbsp;</span>
                <button onClick={this.increaseCounter}>+</button>
            </div>
        );
    }
}


export default LifeCycle;