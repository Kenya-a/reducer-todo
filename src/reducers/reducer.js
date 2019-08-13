export const initialState = {
   toDoArray: [
    {
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
    },]
};


export const reducerTodo = (state, action) => {
    switch(action.type){

        case 'TOGGLE_EDITING':
            state.map(item => {
                if (item.id === action.payload)
                {
                    return{
                        ...state,
                        todos: state.todos.map(...state)
                    }
                }
            })
        case 'UPDATE_TODO':

            return {
                ...state,
                item: action.payload,
                completed:!state.completed,
                id: Date.now()
            };

        default:
            return state;

    }
};

