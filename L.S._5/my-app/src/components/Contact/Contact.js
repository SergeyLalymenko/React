import React from 'react'
import './Contact.css'


function Contact(props){
    return (
        <div className="contact-item"
            onClick = {() => props.onContactClick(props.item.id)}
            >
            <span>
                {props.item.name + ' ' + props.item.surname}
            </span>
            <span>
                {props.item.phone}
            </span>
        </div>
    )
}

export default Contact;
