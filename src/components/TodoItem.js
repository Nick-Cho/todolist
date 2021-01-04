import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
  isCompleted = () => {
    return {
      boxSizing: 'borderBox',
      border: '0.5px #d3d3d3 solid', 
      padding: '10px',
      margin: '5px',
      marginLeft: '525px',
      textDecoration: this.props.todo.completed ? 'line-through': 'none',
      width: '800px',
    };
  };
  render() {
    const {id, title} = this.props.todo;
    return (
      <div style = {this.isCompleted()}> 
        <p>
          <input type = "checkbox" onChange = {this.props.markCompleted.bind(this.props, id)}/> 
          {" "}
          {title}
        </p>
      </div>
    );
  }
}

//Prop Types
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
  markCompleted: PropTypes.func.isRequired
}
export default TodoItem
