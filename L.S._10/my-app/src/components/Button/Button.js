import React from 'react'
import { NavLink } from 'react-router-dom'

function Button(props) {
    return (
        <button onClick={props.onAddButtonClick} style={buttonStyles}>
            <NavLink to='/form'>Add</NavLink>
        </button>
    )
}

const buttonStyles = {
    display: 'flex',
    justifyContent: 'center',
    width: '50px',
    height: '20px',
    backgroundColor: 'gray',
    margin: '10px',
    border: '1px solid black',
}

export default Button
