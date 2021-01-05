import './App.css';
import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
class App extends Component {
  //Dummy Todo's for debugging
    state = {
      todos: [
        {
          id: 1,
          title: 'Pick up groceries',
          completed: false, 
        },
        {
          id: 2,
          title: 'Work on personal portfolio project', 
          completed: true,
        },
      ]
    }
    
// Toggling Completed Todos
  markCompleted =id =>{
    this.setState({
       todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
      })   
    });
    //this.state.todos[id].completed = !this.state.todos[id].completed
  };

  // Delete Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  // Add todo
  addTodo = (title) => {
    const newTodo = {
      id: 3,
      title: title,
      completed: false,
    }
    this.setState({todos:[...this.state.todos, newTodo]})
  }

  render(){
    return (
      <div className = "App">
        <Header/>
        <Todos todos={this.state.todos} delTodo = {this.delTodo} markCompleted = {this.markCompleted} />
        <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  } 
}


export default App;
