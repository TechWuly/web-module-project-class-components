import React from 'react'

  class Todo extends React.Component {

    render () {
      const { todo, toggleCompleted} = this.props 
      return (
        <li onClick={() => toggleCompleted(todo.id)}>
          {todo.name} {todo.completed ? '✔' : ''}

        </li>
      );
    }
  }
  
    export default Todo;
      