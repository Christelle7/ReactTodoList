import React, { Component } from 'react';

class Task extends Component {

render(){
  return(
    <li>{this.props.taskName}<button onClick={this.props.handleDeleteTask}> Conquered </button></li>
  );
  }
}

export default Task;