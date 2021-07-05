import React, { useReducer } from 'react';
// import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import ListForm from './components/ListForm'

import {
  reducer,
  initialState,
   ADD_TODO,
   TOGGLE_ITEM,
} from './reducers/reducer';

const todos = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: Date.now()
  },

  {
    item: 'Learn about reducers',
    completed: false,
    id: Date.now()
  }
];

const  App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, payload: item });
  };

  const toggleItem = id => {
     dispatch({ type: TOGGLE_ITEM, payload: id});
  };

  return (
    <div className = 'App'>
      <div className ='header'>
        <h1>To Do List</h1>
        <ListForm addItem = {addItem}/>
      </div>
      <div>
        <TodoList
        todos = {state.todos}
        toggleItem = {toggleItem}
        />
      </div>
    </div>
  )

}

export default App;
