import React from 'react'
import './Contact.css'


function Contact({onContactClick, item}){
    return (
        <div className="contact-item"
            onClick = {() => onContactClick(item.id)}
            >
            <span>
                {item.name + ' ' + item.surname}
            </span>
            <span>
                {item.phone}
            </span>
        </div>
    )
}

export default Contact;
