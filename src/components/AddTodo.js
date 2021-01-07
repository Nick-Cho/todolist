import React, { Component } from 'react'
export class AddTodo extends Component {
  constructor(){
    super()
    this.state = {
      title : '',
      isDisplay: 'none'
    }
  }
  

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
    this.setState({isDisplay: 'none'})
  }

  addTodo = (e) => {
    this.setState({isDisplay: 'flex'})
  }

  render() {
    return (
      <div style = {{width: '84rem'}}>
        <form onSubmit = {this.onSubmit} style = {{display: this.state.isDisplay, width: '770px', padding: '0 36.4rem'}}>
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
        <div style = {{height: '10px'}}> 
        </div>

        <button className = "addTodo" onClick = {this.addTodo}> 
          + 
        </button>
        
      </div>
    )
  }
}



export default AddTodo
