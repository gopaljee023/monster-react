import React from 'react';

import './App.css';

//import CardList: how to do that :Jee

import {CardList} from './component/card-list/card-list.component'

class MyClass extends React.Component{
  
  constructor(){
    super();
    //Arrays
    this.state ={ 
      monsters:[] ,
      searchField:""     
    }
  }

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(Response=> Response.json())
   .then(users=> this.setState({monsters:users}))
   
 }
   
 
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes( searchField.toLowerCase()))

    return (
      <div className="App">
        <input type="search" placeholder="search monsters"
         onChange={e=> this.setState({searchField:e.target.value}, ()=>console.log(this.state))}
        />
        <CardList monsters={filteredMonsters}/>
       </div>
    )
  }
}
export default MyClass;