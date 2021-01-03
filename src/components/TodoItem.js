import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
  isCompleted = () => {
    return (this.props.todo.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'})
  }
  render() {
    return (
      <div style = {this.isCompleted()}>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

//Prop Types
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
}
export default TodoItem
