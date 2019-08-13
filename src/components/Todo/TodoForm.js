import React, { useState } from 'react';
import {useReducer} from 'react';

import { initialState, reducerTodo } from '../../reducers/reducer';

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState;

    const [state, dispatch] = useReducer(reducerTodo, initialState);

    console.log(state);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    return (
        <div>
            {!state.editing ? (
                <h1>
                    {state.item}{' '}
                    <i
                        onClick={() => dispatch({ type: 'TOGGLE_EDITING' })}
                    />
                </h1>
            ) : (
                    <div>
                        <input
                            type='text'
                            name='newTodo'
                            value={newTodo}
                            onChange={handleChanges}
                        />
                        <button
                            onClick={() =>
                                dispatch({ type: 'UPDATE_TODO', payload: newTodo })
                            }
                        >
                            Add New Todo
                    </button>
                    </div>
                )}

        </div>
    )

}



export default TodoForm