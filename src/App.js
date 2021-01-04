import './App.css';
import React, {Component} from 'react';
import Todos from './components/Todos';
class App extends Component {
  //Dummy Todo's for debugging
    state = {
      todos: [
        {
          id: 1,
          title: 'Pick up groceries',
          completed: false 
        },
        {
          id: 2,
          title: 'Work on personal portfolio project', 
          completed: true
        },
      ]
    }
    
  

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

  render(){
    return (
      <div className = "App">
        <Todos todos={this.state.todos} markCompleted = {this.markCompleted} />
      </div>
    );
  } 
}

export default App;
