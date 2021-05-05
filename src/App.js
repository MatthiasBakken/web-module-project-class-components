import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor( props ) {
    super( props )
    this.state = {
      todoList: [],
      completed: []
    }
  }

  todoHandler ( todo ) {
    console.log("todo in handler",todo)
    this.setState( {
      todoList: [ ...this.state.todoList, {
        task: todo.task,
        completed: todo.completed,
        id: todo.id
      } ]
    } );
    localStorage.clear()
    localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
  }

  handleTodoDelete ( id ) {
    let tempList = [];
    this.state.todoList.filter( todo => {
      if ( todo.id != id ) {
        tempList.push( todo );
      }
    })
    console.log( tempList );
    this.setState( {
      todoList: tempList
    } );
    localStorage.clear()
    localStorage.setItem("todoList", JSON.stringify(tempList))
  };

  componentDidMount () {
    let storedList = JSON.parse(localStorage.getItem( "todoList" ));
    if ( storedList ) {
      this.setState( {
        todoList: [ ...storedList ]
      } );
    };
    console.log("json parsed", storedList );
  };
  

  render () {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleTodos={(todo) => this.todoHandler(todo)} />
        <TodoList
          todos={this.state.todoList}
          handleDelete={( id ) => this.handleTodoDelete( id )}
        />
      </div>
    );
  }
}

export default App;
