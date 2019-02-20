import React from 'react';
import './done-list-module.css';

export const DoneList = props => {
  const onClickHandler =  (event, clickedIndex) => {
    const filteredDoneList = props.doneListItems.filter((item, index) => index !== clickedIndex);
    props.handleDoneListChange(filteredDoneList, props.doneListItems[clickedIndex]);
  }
  return <div>
    <ul>
    {
      props.doneListItems.map((item,index) => <li key={`done-${index}`} onClick={event => onClickHandler(event, index)}>{item}</li>)
    }
    </ul>
  </div>
};
