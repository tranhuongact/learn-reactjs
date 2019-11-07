import React from 'react';

function UserLogin() {
    return (
        <h3>Welcome back!</h3>
    )
}

function GuestLogin() {
    return (
        <h3>Welcome to website!</h3>
    )
}

class Greeting extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isloggin : false
    //     }
    // }
    render() {
        const isloggin = this.props.isloggin;
        if (isloggin) {
            return <GuestLogin />
        }
        return <UserLogin />
    }
}

export default Greeting;