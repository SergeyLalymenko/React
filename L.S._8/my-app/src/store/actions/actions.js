import todosService from '../../todosService'

export const SET_TODO_ACTION = 'SET_TODO_ACTION'
export const setTodo = (todo) => (dispatch) => {
    const newTodo = {
        ...todo,
        completed: !todo.completed
    }
    todosService.put('/' + newTodo.id, newTodo).then(({data}) => dispatch({type: SET_TODO_ACTION, payload: data}));
}

export const SET_TODOS_ACTION = 'SET_TODOS_ACTION'
export const setTodos = () => (dispatch) => {
    todosService.get('/').then(({data}) => dispatch({type: SET_TODOS_ACTION, payload: data}));
}

export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION'
export const deleteTodo = (e, id) => (dispatch) => {
    e.stopPropagation();
    todosService.delete('/' + id).then(() => dispatch({type: DELETE_TODO_ACTION, payload: id}));
}

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'
export const addTodo = () => (dispatch, getState) => {
    const newTodo = {
        title: getState().form.value,
        completed: false,
    }
    todosService.post('/', newTodo).then(({data}) => dispatch({type: ADD_TODO_ACTION, payload: data}));
}

export const SET_FORM_ACTION = 'SET_FORM_ACTION'
export const setForm = (payload) => {
    return {
        type: SET_FORM_ACTION,
        payload: payload
    }
};