import React, {Component} from 'react'; 
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todos extends Component {
  
  render(todos){
    return this.props.todos.map((todo) => (
      <TodoItem key = {todo.id} delTodo = {this.props.delTodo} todo = {todo} markCompleted = {this.props.markCompleted}/>
    ));
  }
}

//Prop Types
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markCompleted: PropTypes.func.isRequired
}

export default Todos;
