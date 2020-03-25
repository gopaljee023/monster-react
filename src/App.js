import React from 'react';
import logo from './logo.svg';
import './App.css';

class MyClass extends React.Component{
  
  constructor(){
    super();
    this.state = { 
     string: 'GOPAL',
     string2:'Madhu'
    };
  }
   
 
  shoot = () =>{
    alert("Great Shot!");
  }

  changeName = ()=>{
    this.setState(
      {string:"Gopal Jee",
      string2:'MadhuMita'})
  }

   changeName2(){
    this.setState({string:"Gopal Jee"})
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          
            <h1>{this.state.string}</h1>
            <h1>{this.state.string2}</h1>
          </p>
          <button onClick={this.changeName2()}>click</button>
          <button onClick={this.changeName}>click</button>
         <button onClick={()=>this.setState({string:"Gopal Jee"})}>lambda click</button>
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