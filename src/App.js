import React from 'react';

import './App.css';

//import CardList: how to do that :Jee

import {CardList} from './component/card-list/card-list.component'
import {SearchBox} from './component/search-box/search-box.component'

class MyClass extends React.Component{
  
  constructor(){
    super();
    //Arrays
    this.state ={ 
      monsters:[] ,
      searchField:"" ,
    }

    
  }

  //arrow function... otherwise we need to write bind this in constructor
  handleChange =(e)=>{
      this.setState({searchField:e.target.value})
  }


 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(Response=> Response.json())
   .then(users=> this.setState({monsters:users}))
   
 }
   
 
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes( searchField.toLowerCase()));

    return (
      <div className="App">
        
        <SearchBox onHandleChange={this.handleChange} placeHolder={'search monster'}/>
        <CardList monsters={filteredMonsters}/>
  
       </div>
    )
  }
}
export default MyClass;