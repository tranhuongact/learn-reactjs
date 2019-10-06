import React, { Component } from 'react';

function NumberList(props) {
    const numbers = props.numbers;
    const numberList = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );
    return (
      <ul>{numberList}</ul>
    );
}

class Array extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <NumberList numbers={this.props.numbers} />
        );
    }
}

export default Array;