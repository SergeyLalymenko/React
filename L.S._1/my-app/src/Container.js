import React from 'react';
import Menu from './Menu';
import Content from './Content';
import './Container.css';


export default class Container extends React.Component{
    render(){
        return(
            <section className = "container">
                <Menu/>
                <Content/>
            </section>
        )
    }
}


