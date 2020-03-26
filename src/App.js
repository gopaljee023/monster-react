import React from 'react';

import './App.css';

//import CardList: how to do that :Jee

import {CardList} from './component/card-list/card-list.component'

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
        <CardList name="jee">
        {
         this.state.monsters.map(mon=>
         <h1 key={mon.id}>{mon.name}</h1>)
       }
        </CardList>
      
      </div>
    );
  }
}
export default MyClass;