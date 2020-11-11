import todosService from '../../todosService'

export const TOGGLE_TODO_ACTION = 'TOGGLE_TODO_ACTION'
export const toggleTodo = (todo) => (dispatch) => {
    const newTodo = {
        ...todo,
        completed: !todo.completed
    }
    todosService.put('/' + newTodo.id, newTodo).then(({data}) => dispatch({type: TOGGLE_TODO_ACTION, payload: data}));
}

export const GET_TODOS_ACTION = 'GET_TODOS_ACTION'
export const getTodos = () => (dispatch) => {
    todosService.get('/').then(({data}) => dispatch({type: GET_TODOS_ACTION, payload: data}));
}

export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION'
export const deleteTodo = (e, id) => (dispatch) => {
    e.stopPropagation();
    todosService.delete('/' + id).then(() => dispatch({type: DELETE_TODO_ACTION, payload: id}));
}

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'
export const addTodo = (value) => (dispatch) => {
    const newTodo = {
        title: value,
        completed: false,
    }
    todosService.post('/', newTodo).then(({data}) => dispatch({type: ADD_TODO_ACTION, payload: data}));
}