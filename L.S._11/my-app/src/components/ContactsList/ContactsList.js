import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { NavLink } from 'react-router-dom'
import Contact from '../Contact/Contact'



function ContactsList({contacts}){
    return (
        <Grid item xs={3} md={3}>
            <Grid container spacing={2}>
                {!contacts ? 'Loading...' : contacts.map((item) => {
                    return <Contact key={item.id} item={item}/>
                })
                }
                <Grid item>
                    <NavLink to="/form" style={linkStyles}>
                        <Button variant="contained" color="primary" size="large" startIcon={<AddIcon/>}>
                            Add
                        </Button>
                    </NavLink>
                </Grid>
            </Grid>
        </Grid>
    )
}

const linkStyles = {
    textDecoration: 'none',
}

export default ContactsList