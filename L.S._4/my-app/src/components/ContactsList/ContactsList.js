import React, { Component } from 'react'
import Contact from '../Contact/Contact'
import './ContactsList.css'


export default class ContactsList extends Component {
    render() {
        return (
            <div className="contacts-list-container">
                {this.props.contacts.map((item) => {
                    return <Contact key={item.id} item={item} onContactClick={this.props.onContactClick}/>
                })
                }
                <button className="contacts-list-add-btn"
                    onClick={this.props.onAddBtnClick}>
                    Add
                </button>
            </div>
        )
    }
}
