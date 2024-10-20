import React from 'react'

class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      inputValue : ''
    };
  }

   // Handle input change
   handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: '' }); // Clear the input after submission
  };

  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Type todo"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        
        <button type="submit">Submit</button> 
        <div style={{marginTop: '20px'}}>
          <button type="button"
         onClick={this.props.clearCompleted}>Hide Completed</button>
         </div>
      </form>
      </div>
    )
  }
}
  export default Form;