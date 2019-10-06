import React from 'react';

const people = {
    firstName : 'Tran',
    lastName : 'Huong'
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h3>Hello {formatName(user)}</h3>;
    }
    return <h3>Welcome!!</h3>;
}

class JSX extends React.Component {
    render(){
        const name = 'Viet Nam';
        const element = <h2>{name} que huong toi!</h2>
        const url = "https://reactjs.org/";
        return (
            <div>
                {element}
                <h3>Hello, {formatName(people)}</h3>
                {getGreeting(people)}
                <a href={url}>Click here to transfer React page</a><br/>
                <a href="https://google.com.vn/">Click here to transfer Google page</a>

            </div>
        )
    }
}

export default JSX;