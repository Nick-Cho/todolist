import React, {Component} from 'react'; 
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todos extends Component {
  markCompleted = (event)=>{

  }
  render(todos){
    return this.props.todos.map((todo) => (
      <TodoItem key = {todo.id} todo = {todo} markCompleted = {this.markCompleted}/>
    ));
  }
}

//Prop Types
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
