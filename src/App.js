import React from 'react';
import logo from './logo.svg';
import './App.css';

class MyClass extends React.Component{
  
  constructor(){
    super();
    this.state = { 
     string: 'GOPAL'
    };
  }
   
 
  shoot= () =>{
    alert("Great Shot!");
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           {this.state.string}
           <h1>Learning state use</h1>
          </p>
          <button onClick={this.shoot} >click</button>
          <button onClick={()=>{alert("from lambda")}}>click2</button>
         <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default MyClass;