import React from 'react'
import Todo from './Todo';

  class TodoList extends React.Component {

    render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <Todo 
          key={todo.id}
          todo ={todo} 
          toggleCompleted ={this.props.toggleCompleted} 
           />
        ))}
      </ul>
    );
  }
}
export default TodoList;
 