import React, { Component } from 'react'
import './FormButtons.css'


export default class FormButtons extends Component {
    render() {
        return (
            <div className="form-buttons-container">
                <button className="form-button" onClick={this.props.onSaveBtnClick}>Save</button>
                <button className={"form-button" + (this.props.form.operation ? "" : " add")} onClick={this.props.onDeleteBtnClick}>Delete</button>
            </div>
        )
    }
}