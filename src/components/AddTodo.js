import React, { Component } from 'react'
export class AddTodo extends Component {
  state = {
    title : ''
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }
  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit} style = {{display: 'flex', width: '770px', padding: '0 36.4rem'}}>
          <input 
          type = "text" 
          name = "title" 
          placeholder = "Add Todo"
          style = {{flex: '10', padding: '5px'}}
          value = {this.state.title}
          onChange = {this.onChange}
          />

          <input 
          type = "submit" 
          value = "Add" 
          className = "btn" 
          style = {{flex: '1'}}/>
        </form>
      </div>
    )
  }
}


export default AddTodo
