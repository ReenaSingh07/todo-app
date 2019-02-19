import React, {Component} from 'react';
import {TodoList} from "./todo-list/todo-list";
import {DoneList} from "./done-list/done-list";

export class TodoApp extends Component{
  constructor(props){
    super(props);
    this.state={
      todoListItems: ['a','b','c'],
      doneListItems: ['d','e'],
      todoInput: ''
    }
  }

  handleTodoListChange = (todoListItems, doneValue) => {
    const clonedDoneArray = this.state.doneListItems.map(item => item);
    clonedDoneArray.push(doneValue);
    this.setState({doneListItems: clonedDoneArray, todoListItems: todoListItems});
  };

  handleTodoInput = event => {
    const clonedTodoArray = this.state.todoListItems.map(item => item);
    clonedTodoArray.push(this.state.todoInput);
    this.setState({todoListItems: clonedTodoArray});
  };

  handleInputOnChange = event => {
    this.setState({todoInput: event.target.value});
  };



  render(){
    return <div>
        <input type={"text"} value={this.state.todoInput} onChange={this.handleInputOnChange} />
        <button onClick={this.handleTodoInput}>Submit</button>

      <TodoList handleTodoListChange={this.handleTodoListChange} todoListItems={this.state.todoListItems} />
      <DoneList doneListItems={this.state.doneListItems} />
    </div>
  }
}