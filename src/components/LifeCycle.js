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

    componentWillMount() {
        console.log("LifeCycle Will Mount");
    }

    componentDidMount() {
        console.log("LifeCycle Did Mount");
        this.setState({
            counter : 5
        })
    }

    componentWillReceiveProps(nextProps) {
        console.log("LifeCycle Will Mount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("LifeCycle shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("LifeCycle Will Update");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("LifeCycle Did Update");
    }

    componentWillUnmount() {
        console.log("LifeCycle Will Unmount");
    }

    render() {
        console.log("LifeCycle render");
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