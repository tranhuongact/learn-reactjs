import React, { Component } from 'react';

const scaleNames = {
    c : 'Celsius',
    f : 'Fahrenheit'
}

class TemperatureInput extends Component {

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div>
                <p>Enter temperature in {scaleNames[scale]}</p>
                <input value={temperature} onChange={this.handleChange} />                
            </div>
        );
    }
}

export default TemperatureInput;

