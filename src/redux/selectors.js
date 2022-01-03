import { createSelector } from 'reselect'

export const searchTextSelector = (state) => state.filters.search
export const todoListSelector = (state) => state.todoList
export const filterStatusSelector = (state) => state.filters.status
export const filterPrioritySelector = (state) => state.filters.priority

//Selectors tra ve list Todo
// Yarn add reselect 

export const todoDisplaySelector = createSelector(todoListSelector, searchTextSelector, filterStatusSelector, filterPrioritySelector, 
    (todoList, searchText, filterStatus, filterPriority) => {
        return todoList.filter((todo) => {
            if (filterStatus === 'All') {
                return filterPriority.length === 0 ? todo.name.includes(searchText) : ( todo.name.includes(searchText) && filterPriority.includes(todo.priority) )
            }
            else if (filterStatus === 'Completed') {
                return filterPriority.length === 0 ? 
                        todo.name.includes(searchText) && todo.completed 
                        : ( todo.name.includes(searchText) && todo.completed && filterPriority.includes(todo.priority) )
            }
            else return filterPriority.length === 0 ? 
            todo.name.includes(searchText) && !todo.completed 
            : ( todo.name.includes(searchText) && !todo.completed && filterPriority.includes(todo.priority) )
        })
    })