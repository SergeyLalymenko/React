export const SET_TODO_ACTION = 'SET_TODO_ACTION'
export function setTodo(payload){
    return {
        type: SET_TODO_ACTION,
        payload
    }
}

export const SET_TODOS_ACTION = 'SET_TODOS_ACTION'
export function setTodos(payload){
    return {
        type: SET_TODOS_ACTION,
        payload
    }
}