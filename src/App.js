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
      ],
      action:[
        {
          name:"start",
          id:"act1"
         },
         {
          name:"build",
          id:"act2"
         },
         {
          name:"eject",
          id:"act3"
         }
      ]
    }
  }

 
   
 
  render(){
    return (
      <div className="App">
       {
         this.state.action.map(act=>
         <h1>{act.name}</h1>)
       }
      </div>
    );
  }
}
export default MyClass;