import React from 'react';

import Item from './Items';

const TodoList = props => {
  return (
    <div >
      {props.todos.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
