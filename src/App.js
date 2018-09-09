import React, { Component } from 'react';
import './App.css';
import Task from './Components/tasks'

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      tasks:[
        {
          taskName:'work',
          id:0
      },

      {
        taskName:'Read',
          id:1
      },
    
    ],
  
    inputText:''

      }
    }
    listTasks=()=>{
      return this.state.tasks.map((task,index)=>{
        return <Task
         key ={index}
        taskName={task.taskName}
        handleDeleteTask={()=>this.handleDeleteTask(index)}
          />;
      });
    };

    handleTextChange=(e)=>{
      e.preventDefault();
      
      // make a copy of the state
      const newState={...this.state};

      // update state.input.Text with new user inpit text
      newState.inputText= e.target.value;

      // set the state to  a new state after changes are made
      this.setState(newState);
  };

  handleSubmit=(e)=>{
    e.preventDefault();

    // make a copy of the state
    const newState={...this.state};

    // adds a new task to state.tasks array
    // id give it a unique value thru the method used
    newState.tasks.push({
      id: Date.now().toString(),
      taskName:newState.inputText
    });

    // this resets the text input form to blank after submit
    newState.inputText = '';

   // set the state to  a new state after changes are made
   this.setState(newState);
  };

  handleDeleteTask =(index)=>{
    const newState={...this.state};
    // remove the item at the specified index
    newState.tasks.splice(index,1);
    this.setState(newState);
  }
    
  
  render() {
      
    return (
      <div className="App">
       <header>
          <h1>On the Grind</h1>
       </header>
       <form onSubmit={this.handleSubmit}>
         <input 
         type="Text" 
         value={this.state.inputText}
         onChange={this.handleTextChange}
         /> 
         <input type="submit"/>
      </form>

        {this.listTasks()}
    
      </div>
    );
  }
}

export default App;
