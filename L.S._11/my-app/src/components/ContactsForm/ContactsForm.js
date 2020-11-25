import React from 'react'
import { Field, Form, Formik } from 'formik'
import TextField from '@material-ui/core/TextField'
import { useHistory, useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CheckIcon from '@material-ui/icons/Check'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'



function ContactsForm({contacts, onSaveBtnClick, onDeleteBtnClick}){
    
    const {push} = useHistory();
    const {id} = useParams();

    function getEmptyValues(){
        return ({name: '', surname: '', phone: ''})
    }

    function getContactValues(id){
        const selectedContact = contacts.find((item) => item.id === id);
        return ({name: selectedContact.name, surname: selectedContact.surname, phone: selectedContact.phone})
    }

    function onFormikSubmit(values){
        push('/');
        onSaveBtnClick(values, id);
    }

    function onDeleteClick(id){
        push('/');
        onDeleteBtnClick(id);
    }

    function renderFormik(){
        return (
            <Formik enableReinitialize={true} initialValues={id ? getContactValues(id) : getEmptyValues()} onSubmit={onFormikSubmit}>
                {renderForm}
            </Formik>
        )
    }

    function renderTextField({field, meta}){
        return (
            <TextField {...field} error={meta.error && meta.touched ? true : false} label={"Enter " + (field.name)} variant="filled" size="small" color="primary" helperText={meta.touched ? meta.error : ''} fullWidth/>
        )
    }

    function validateField(value){
        return value ? null : 'Поле не может быть пустым!';
    }

    function renderForm(props){
        return (
            <Form>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Field name="name" validate={validateField} placeholder="Enter name">{renderTextField}</Field>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Field name="surname" validate={validateField} placeholder="Enter surname">{renderTextField}</Field>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Field name="phone" validate={validateField} placeholder="Enter phone">{renderTextField}</Field>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Grid container justify="space-between">
                            <Button type="submit" variant="contained" color="primary" startIcon={<CheckIcon/>} disabled={!props.isValid}>Save</Button>
                            <Button type="button" variant="contained" color="secondary" startIcon={<DeleteIcon/>} style={id ? null : deleteBtnStyles} onClick={() => onDeleteClick(id)}>Delete</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Form>
        )
    }

    return (
        <Grid item xs={6} md={6}>
            <Grid container>
                <Grid item xs={4} md={4}>
                    <Paper style={paperStyles}>
                        {!id ? renderFormik() : !contacts.find((item) => item.id === id) ? 'Контакта нет!' : renderFormik()}
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

const paperStyles = {
    backgroundColor: 'rgb(180,180,180)',
    padding: '5px',
}

const deleteBtnStyles = {
    display:'none',
}

export default ContactsForm