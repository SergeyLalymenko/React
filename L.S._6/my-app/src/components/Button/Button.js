import React from 'react'

function Button(props) {
    return (
        <button onClick={props.onAddButtonClick} style={buttonStyles}>
            Add
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
