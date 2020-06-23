const initialState = {
    tasks: [
        {
            name: 'Test Redux Task',
            completed: false,
        }
    ],
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            const newState = {
                ...state,
                todo: [
                    ...state.todos,
                    {
                        name: action.content,
                        completed: false,
                    }
                ]
            }
            return newState

        default:
            return state;
    }

    return state;
}

export default todoReducer;