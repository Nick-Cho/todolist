import React, { Component } from 'react'
import PropTypes from 'prop-types';
/*import Delete from './img/delete.png'
import DeleteHover from './img/deleteHover.png'*/

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
            {title} 
            <button onClick = {this.props.delTodo.bind(this, id)} style = {btnStyle}>x</button>
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

const btnStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
/*const imgStyle = {
  width: '13px',
  maxWidth: '100%',
  cursor: 'pointer',
  hover: '' ,
  float: 'right',
  display: 'inline-block',
  "&:hover":{
    opacity: '0',
    float: 'left'
  }
}*/



export default TodoItem
