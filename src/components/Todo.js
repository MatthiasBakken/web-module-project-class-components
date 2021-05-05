import React, { Component } from 'react'

import './Todo.css';


class Todo extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      completed: false
    }
  }
  
  render () {
    const { deleteHandler } = this.props;

    const completedHandler = () => {
      document.querySelector( `#a${this.props.todoData.id}` ).classList.toggle( "strike-through" );
      this.setState( { completed: !this.state.completed } );
    };

    return (
      <span style={{ display: "flex", flexDirection: "row" }}>
        <button style={{marginRight: "20px"}} onClick={() => deleteHandler( this.props.todoData.id )}>X</button>
        <li style={{padding: "5px"}} id={`a${this.props.todoData.id}`}>{this.props.todoData.task}</li>
        <button style={{padding: "5px"}} onClick={() => completedHandler()}>{this.state.completed ? "Completed" : "Incomplete" }</button>
      </span >
    )
  }
}

export default Todo;