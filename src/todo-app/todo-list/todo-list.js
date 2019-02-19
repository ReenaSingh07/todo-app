import React from 'react';
import './todo-list-module.css';


export const TodoList = props => {
  const onClickHandler =  (event, clickedIndex) => {
    const filteredTodoList = props.todoListItems.filter((item, index) => index !== clickedIndex);
    props.handleTodoListChange(filteredTodoList, props.todoListItems[clickedIndex]);
  };

  return <div className={'todoList'}>
    {
      props.todoListItems.map((item, index) => <li key={`todo-${index}`} onClick={event => onClickHandler(event, index)}>{item}</li>)
    }
  </div>
};