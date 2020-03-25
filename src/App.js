import React from 'react';
import logo from './logo.svg';
import './App.css';

class MyClass extends React.Component{
  
  constructor(){
    super();
    //Arrays
    this.state ={ 
      monsters:[
        { 
          name: 'GOPAL',
          id:'id1'
        },
        {
          name:"Madhu",
           id:'id2'
        },
        {
          name:"Akhilesh",
          id:'id3'
        }
      ]
    }
  }

 
   
 
  render(){
    return (
      <div className="App">
        {
            
          this.state.monsters.map(
              mon=><h1 key={mon.id}>{mon.name}</h1>
                )
            
        }
      </div>
    );
  }
}
export default MyClass;