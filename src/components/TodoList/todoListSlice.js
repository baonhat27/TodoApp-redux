

const initState = [
        { id: 1, name: 'Learn Redux',completed: false, priority:'Medium'},
        { id: 2, name: 'Learn Yoga',completed: true, priority:'Low'},
        { id: 3, name: 'Learn English',completed: false, priority:'High'},
        { id: 4, name: 'Clean House',completed: true, priority:'Low'},
        { id: 5, name: 'Eat Breakfast',completed: false, priority:'Medium'},
        { id: 6, name: 'Join a company',completed: true, priority:'High'},
]

const todoListReducer = (state = initState , action) => {
    
    // console.log({state,action});
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state,
                action.payload
            ]
        case 'todoList/statusChange':
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo )
        default:
            return state;
    }
}

export default todoListReducer