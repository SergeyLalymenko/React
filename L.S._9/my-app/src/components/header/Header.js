import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <ul className="header-ul">
                <li className="header-li"><NavLink to="/albums" activeClassName="selected">Albums</NavLink></li>
                <li className="header-li"><NavLink to="/users" activeClassName="selected">users</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
