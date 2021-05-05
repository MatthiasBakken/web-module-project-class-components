// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'

import Todo from './Todo';

class TodoList extends Component {

  render () {
    return (
      <ol>
        {
          this.props.todos.map( todo => {
            console.log("todo in mapped todos", todo)
            return (
              <Todo
                todoData={todo}
                key={todo.id}
                deleteHandler={this.props.handleDelete}
                completeHandler={this.props.handleComplete}
              />
            )
            })
        }
      </ol>
    )
  }
};

export default TodoList;