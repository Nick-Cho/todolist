import './App.css';
import React, {Component} from 'react';
import Todos from './components/Todos';
class App extends Component {
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
  render(){
    return (
      <div className = "App">
        <Todos todos={this.state.todos}/>
      </div>
      );
  } 
}

export default App;
