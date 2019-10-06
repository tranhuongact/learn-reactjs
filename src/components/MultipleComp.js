import React from 'react'

function GetName(props){
    return (
        <div>
            <h3>Welcome {props.name}</h3>
        </div>
    )
}

class Learn extends React.Component {
    render() {
        return (
            <h3>Learn {this.props.name}</h3>
        )
    }
}

class MultipleComp extends React.Component {
    render() {
        return (
            <div>
                <GetName name = "Diem" />
                <GetName name = "Huong" />
                <Learn name = "ReactJS" />
            </div>
        )
    } 
}

export default MultipleComp;