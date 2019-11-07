import React from "react";
import Greeting from "./Greeting";

function LoginButton(props) {
    return(
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButon(props) {
    return(
        <button onClick={props.onClick}>Logout</button>
    )
}

class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggin : false
        }
    }
     
    handleLogin = () => {
        this.setState({
            isLoggin: true
        })
    }

    handleLogin = () => {
        this.setState({
            isLoggin: false
        })
    }

    render() {
        const isLoggin = this.state.isLoggin;
        let button;

        if (isLoggin) {
            button = <LoginButton onClick={this.handleLogin} />
        } else {
            button = <LogoutButon onClick={this.handleLogout} />
        }

        return (
            <div>
                <Greeting isLoggin={isLoggin} />
                {button}
            </div>
        )
    }
}

export default LoginControl;