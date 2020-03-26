import React from 'react';
import logo from './logo.svg';
import './App.css';

class MyClass extends React.Component{
  
  constructor(){
    super();
    //Arrays
    this.state ={ 
      monsters:[]      
    }
  }

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(Response=> Response.json())
   .then(users=> this.setState({monsters:users}))
   
 }
   
 
  render(){
    return (
      <div className="App">
       {
         this.state.monsters.map(mon=>
         <h1 key={mon.id}>{mon.name}</h1>)
       }
      </div>
    );
  }
}
export default MyClass;