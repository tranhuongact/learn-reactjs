import React from 'react';

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
    render() {
        return (
            <NumberList numbers={this.props.numbers} />
        );
    }
}

export default Array;