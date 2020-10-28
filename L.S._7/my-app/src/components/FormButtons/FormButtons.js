import React from 'react'
import './FormButtons.css'


function FormButtons(props){
    return (
        <div className="form-buttons-container">
            <button className="form-button" onClick={props.onSaveBtnClick}>Save</button>
            <button className={"form-button" + (!props.form ? '' : props.form.targetElementId ? "" : " add")} onClick={props.onDeleteBtnClick}>Delete</button>
        </div>
    )
}

export default FormButtons;