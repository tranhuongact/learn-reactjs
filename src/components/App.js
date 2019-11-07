import React from 'react';
import MultipleComp from './MultipleComp';
import JSX from './JSX';
import Clock from './Clock';
import LifeCycle from './LifeCycle';
import Toggle from './Toggle';
import Array from './Array';
import Form from './Form';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import FilterableProductTable from './thinking/FilterableProductTable';
import Calculator from './Calculator';


function ActionLink(){
  function handleClick(e){
    e.preventDefault(); //ngăn ko cho chuyển trang
    console.log("handleClick");
  }
  return(
    <a href="https://www.google.com.vn" onClick={handleClick}>Click here</a>
  )
}

class App extends React.Component { 
  
  render() {
    var myStyle = {
      color: 'red'
    };

    const numbers = [1, 2, 3, 4, 5];

    return (
      <div>
        <h1 style={myStyle}>Hello world!</h1>
        <hr/>
        <MultipleComp />
        <hr/>
        <JSX />
        <hr/>
        <Clock />
        <hr/>
        <h2>LifeCycle</h2>
        <LifeCycle />
        <hr/>
        <h2>Handling events</h2>
        <ActionLink />
        <Toggle />
        <hr/>
        <h2>Conditional rendering</h2>
        <Greeting isLoggin={true} />
        <LoginControl />
        <hr/>
        <h2>List</h2>
        <Array numbers={numbers} />
        <hr/>
        <Form />
        <hr/>
        <h2>Lifting state up</h2>
        <Calculator />
        <hr/>
        <FilterableProductTable />
      </div>
    )
  }
}




export default App;
