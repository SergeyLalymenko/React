import React from 'react'
import Contact from '../Contact/Contact'
import './ContactsList.css'


function ContactsList(props){
    return (
        <div className="contacts-list-container">
            {!props.contacts ? 'Loading...' : props.contacts.map((item) => {
                return <Contact key={item.id} item={item} onContactClick={props.onContactClick}/>
            })
            }
            <button className="contacts-list-add-btn" onClick={props.onAddBtnClick}>
                Add
            </button>
        </div>
    )
}

export default ContactsList;
