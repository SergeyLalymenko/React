import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setTodo, setTodos } from '../../store/actions'
import todosService from '../../todosService'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'


function TodoList({list, setTodo, setTodos}){

    useEffect(() => {
        todosService.get('/')
            .then(({data}) => setTodos(data))
    }, [])

    function onToggle(todo){
        const newTodo = {...todo, completed: !todo.completed};
        todosService.put('/' + todo.id, newTodo);
        setTodo(newTodo);
    }

    return (
        <ul className="container">
                {!list ? 'Loading...' : list.map((item) => {
                    return <TodoItem key={item.id} item={item} onToggle={onToggle}/>
                })
                }
        </ul>
    )
}

function mapStateToProps(state, props){
    return {
        list: state.list
    }
}

const mapDispatchToProps = {
    setTodo,
    setTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)