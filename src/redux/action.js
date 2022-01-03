// export const addTodoAction = {
//     type:'todoList/addTodo',
//     payload:{ id: 1, name: 'learn redux',completed: false, priority:'Medium'}
// }

// Nên tạo Action creators thay vì action

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }

}
export const searchFilterChange = (data) => {
    return {
        type: 'filters/searchFilterChange',
        payload: data
    }
}
export const statusFilterChange = (data) => {
    return {
        type: 'filters/statusFilterChange',
        payload: data
    }
}
export const priorityFilterChange = (data) => {
    return {
        type: 'filters/priorityFilterChange',
        payload: data
    }
}
export const statusChange = (id) => {
    return {
        type: 'todoList/statusChange',
        id: id,
    }
}
