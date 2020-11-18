import React from 'react'
import { NavLink } from 'react-router-dom'


function Stickers({sticker, onStickerDown, onStickerDelete}) {

    const сontainerStickerStyles = {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        marginLeft: sticker.x + 'px',
        marginTop: sticker.y + 'px',
        backgroundColor: 'yellow',
        border: '1px solid black',
    }

    const textContainerStyles = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100px',
        minWidth: '100px',
        width: sticker.width + 'px',
        height: sticker.height + 'px',
    }

    const headerContainer = {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderBottom: '1px solid black',
    }

    const elementStyles = {
        display: 'flex',
        margin: '0 5px',
    }

    const titleStyles = {
        display: 'flex',
        margin: '0 auto',
        color: 'black',
        fontSize: '18px',
    }

    const descriptionStyles = {
        display: 'flex',
        color: 'red',
        fontSize: '14px',
        marginTop: '5px',
    }

    return (
        <div style={сontainerStickerStyles} onMouseDown={onStickerDown}>
            <div style={headerContainer}>
                <div style={elementStyles} onClick={(e) => onStickerDelete(e.target.parentElement.nextElementSibling.children[0].id)}>X</div>
                <div style={elementStyles}><NavLink to={'/form/' + sticker.id}>Edit</NavLink></div>
                <div style={elementStyles} className='move-element'>O</div>
            </div>
            <div style={textContainerStyles}>
                <div id={sticker.id} style={titleStyles}>
                    {sticker.title}
                </div>
                <div style={descriptionStyles}>
                    {sticker.description}
                </div>
            </div>
        </div>
    )
}

export default Stickers
