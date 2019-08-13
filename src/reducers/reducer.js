export const initialState = {
   todos: [
    {
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
    },

    {
        item: 'Learn about Javascript',
        completed: false,
        id: Date.now()
    },

]
};


export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now(),
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case 'TOGGLE_ITEM':
            return {
                ...state,
                todos: state.todos.map(item => {
                    if (action.payload === item.id) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    }
                    return item;
                })
            };
        //ClearPurchased
        default: return state;
    }
}