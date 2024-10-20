import React from 'react'
import TodoList from './TodoList'
import Form from './Form'


 class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos:[
        { name: 'Organize Garage',
           id: 1528817077286, completed: false },
        { name: 'Bake Cookies',
           id: 1528817084358, completed: false }
      ],

      inputValue : ''
    };
  }

    toggleCompleted = (id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id === id) {
            return {...todo, completed: !todo.completed};
          }
           return todo;
        })
      });
    };

    addTodo = (todoName) => {
       const newTodo = {
        name: todoName,
        id: Date.now(),
        completed: false
       };
       
       this.setState({
        todos: [...this.state.todos, newTodo]
       })
    };

    clearCompleted = () => {
      this.setState({
        todos: this.state.todos.filter(todo => !todo.completed)
      });
    };


  render() {
    return (
      <div>
       <h1>Todos:</h1> 
       <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <Form addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    )
  }
}
  export default App;