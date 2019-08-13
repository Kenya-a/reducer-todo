import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            {props.todoArrray.map(item => <Todo key={item.id} item={item} />)}

            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Complete
            </button>
        </div>
    )
}
export default TodoList;