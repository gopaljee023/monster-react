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
    return (
      <div className="App">
        <input type="search" placeholder="search monsters"
         onChange={e=> this.setState({searchField:e.target.value}, ()=>console.log(this.state))}
        />
        <CardList monsters={this.state.monsters}/>
       </div>
    )
  }
}
export default MyClass;