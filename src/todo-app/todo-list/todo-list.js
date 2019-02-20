import React from 'react';
import './todo-list-module.css';


export const TodoList = props => {
  const onClickHandler =  (event, clickedIndex) => {
    const filteredTodoList = props.todoListItems.filter((item, index) => index !== clickedIndex);
    props.handleTodoListChange(filteredTodoList, props.todoListItems[clickedIndex]);
  };

  return <div className={'todoList'}>
    <ul>
    {
      props.todoListItems.map((item, index) => <li key={`todo-${index}`} >{item}
        <button onClick={event => onClickHandler(event, index)}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12">
        <path fill="none" fill-rule="nonzero" stroke="#979797" d="M.6 6l2.773 5.333L14.467.667"/>
        </svg>
</button>
      </li>)
    }
    </ul>
  </div>
};