import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom'



function Contact({item}){
    return (
        <Grid item xs={12} md={12}>
            <Paper style={paperStyles}>
                <NavLink to={`/form/${item.id}`} style={linkStyles}>
                    <Typography variant="body1" style={typographyStyles}>{item.name + ' ' + item.surname}</Typography>
                    <Typography variant="body1" style={typographyStyles}>{item.phone}</Typography>
                </NavLink>
            </Paper>
        </Grid>
    )
}

const typographyStyles = {
    marginLeft: '5px',
}

const linkStyles = {
    textDecoration: 'none',
}

const paperStyles = {
    backgroundColor: 'rgb(180,180,180)',
}

export default Contact
