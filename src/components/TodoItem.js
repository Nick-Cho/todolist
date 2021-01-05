import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Delete from './img/delete.png'
import DeleteHover from './img/deleteHover.png'

export class TodoItem extends Component {
  isCompleted = () => {
    return {
      boxSizing: 'borderBox',
      border: '0.5px #d3d3d3 solid', 
      paddingLeft: '10px',
      paddingRight: '10px',
      margin: '5px',
      marginLeft: '325px',
      textDecoration: this.props.todo.completed ? 'line-through': 'none',
      width: '750px',
      position: 'relative',
    };
  };
  render() {
    const {id, title} = this.props.todo;
    return (
      <div style = {this.isCompleted()}> 
        <span>
          <p>
            <input type = "checkbox" onChange = {this.props.markCompleted.bind(this.props, id)}/> 
            {" "}
            {title}, 
            <img  src = {Delete} className = "trash" alt = 'Delete'/>
            <img src = {DeleteHover} className = "trashHover" alt = 'Delete' onClick = {this.props.delTodo.bind(this, id)}/>
        </p>
      </span>
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
