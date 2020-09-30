import React, { Component } from 'react'
import './Contact.css'


export default class Contact extends Component {
    render() {
        return (
            <div className="contact-item"
                onClick = {() => this.props.onContactClick(this.props.item.id)}
                >
                <span>
                    {this.props.item.name + ' ' + this.props.item.surname}
                </span>
                <span>
                    {this.props.item.phone}
                </span>
                <span>
                    {this.props.item.email}
                </span>
            </div>
        )
    }
}
