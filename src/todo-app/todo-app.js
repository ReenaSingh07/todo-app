import React, { Component } from 'react';
import { TodoList } from "./todo-list/todo-list";
import { DoneList } from "./done-list/done-list";
import './todo-app-module.css'

export class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoListItems: [],
      doneListItems: [],
      todoInput: ''
    }
  }

  handleTodoListChange = (todoListItems, doneValue) => {
    const clonedDoneArray = this.state.doneListItems.map(item => item);
    clonedDoneArray.push(doneValue);
    this.setState({ doneListItems: clonedDoneArray, todoListItems: todoListItems });
  };
  handleDoneListChange = (doneListItems,doneValue) => {
  this.setState({doneListItems: doneListItems});
  }
  handleTodoInput = event => {
    if (this.state.todoInput === '') {
      return;
    }
    const clonedTodoArray = this.state.todoListItems.map(item => item);
    
    clonedTodoArray.push(this.state.todoInput);
  
    this.setState({ todoListItems: clonedTodoArray,todoInput: '' });
  };

  handleInputOnChange = event => {
    this.setState({ todoInput: event.target.value });
  };



  render() {
    return <div>
      <input type={"text"} value={this.state.todoInput} onChange={this.handleInputOnChange} />
      <button onClick={this.handleTodoInput}>Submit</button>
      <div className="replaceTodoDone">
      <h1>ToDo</h1>
      <TodoList 
      handleTodoListChange={this.handleTodoListChange} 
      todoListItems={this.state.todoListItems} />
      <h1 className={"replaceDone"}>Done</h1>
      <DoneList 
      handleDoneListChange={this.handleDoneListChange}
      doneListItems={this.state.doneListItems} />
      </div>
     
      
    </div>
  }
}