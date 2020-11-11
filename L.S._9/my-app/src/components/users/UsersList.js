import React from 'react'
import { NavLink } from 'react-router-dom'
import './Users.css'

function UsersList({list, onChangeUserClick, onAddBtnClick}) {
    return (
        <ul className="users-ul">
            {list.map(({id, name, username}) => {
                return (
                    <li className="users-li" key={id}>
                        <NavLink to={`/albums?userId=${id}`}>
                            {`${name} ${username}`}
                        </NavLink>
                        <NavLink to={`/form/${id}`} className="users-red" onClick={() => onChangeUserClick(id)}>
                            Ред
                        </NavLink>
                    </li>
                )
            })}
            <button className="users-add-btn"><NavLink to={`/form`} onClick={onAddBtnClick}>Add</NavLink></button>
        </ul>
    )
}

export default UsersList