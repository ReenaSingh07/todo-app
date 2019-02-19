import React from 'react';

export const DoneList = props => {
  return <div>
    {
      props.doneListItems.map(item => <li>{item}</li>)
    }
  </div>
};