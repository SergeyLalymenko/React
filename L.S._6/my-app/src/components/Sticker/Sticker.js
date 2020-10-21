import React from 'react'


function Stickers(props) {

    const сontainerStickerStyles = {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        marginLeft: props.sticker.x + 'px',
        marginTop: props.sticker.y + 'px',
        backgroundColor: 'yellow',
        border: '1px solid black',
    }

    const textareaStyles = {
        display: 'flex',
        minHeight: '50px',
        minWidth: '50px',
        width: props.sticker.width + 'px',
        height: props.sticker.height + 'px',
    }

    const deleteContainerStyles = {
        display: 'flex',
        width: '10px',
        marginLeft: '5px',
    }

    return (
        <div style={сontainerStickerStyles} onMouseDown={props.onStickerDown} className="sticker-container">
            <div onClick={(e) => props.onStickerDelete(e.target.nextElementSibling.id)} style={deleteContainerStyles}>X</div>
            <textarea id={props.sticker.id}
            value={props.sticker.description} 
            onChange={props.onHandleTextareaChange} 
            onBlur={props.onStickerBlur}
            style={textareaStyles}>
            </textarea>
        </div>
    )
}

export default Stickers
