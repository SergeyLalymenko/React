import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useHistory, useParams } from 'react-router-dom'

function StickerForm({onSaveBtnClick, stickers}) {

    const {goBack} = useHistory();
    const {id} = useParams();

    function onFormikSubmit(values){
        onSaveBtnClick(values, id);
        goBack();
    }

    function onCancelClick(){
        goBack();
    }

    function getEmptyValues(){
        return {title: '', description: ''}
    }

    function getStickerValues(id){
        const selectedSticker = stickers.find((item) => item.id === id);
        return {title: selectedSticker.title, description: selectedSticker.description}
    }

    function renderForm(props){
        return (
            <Form style={formikStyles}>
                <Field name="title" style={formikElementStyles} validate={validateTitle}/>
                {props.errors.title && props.touched.title ? <div>{props.errors.title}</div> : null}
                <Field name="description" style={formikElementStyles} validate={validateDescription}/>
                {props.errors.description && props.touched.description ? <div>{props.errors.description}</div> : null}
                <button type="submit" style={formikBtn} disabled={!props.isValid}>Save</button>
                <button type="button" onClick={onCancelClick} style={formikBtn}>Cancel</button>
            </Form>
        )
    }

    function validateTitle(value){
        return value ? null : 'Поле не может быть пустым!';
    }

    function validateDescription(value){
        return value.length <= 255 ? null : 'Слишком много символов!';
    }

    return (
        <div style={modalStyles}>
            <div>
                <Formik initialValues={id ? getStickerValues(id) : getEmptyValues()} onSubmit={onFormikSubmit}>
                    {renderForm}
                </Formik>
            </div>
        </div>
    )
}

const modalStyles = {
    display: 'flex',
    zIndex: '100',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
}

const formikStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'gray',
    width: '20vw',
    padding: '10px',
    marginLeft: '40vw',
    marginTop: '30vh',
    border: '1px solid black',
}

const formikElementStyles = {
    display: 'flex',
    width: '70%',
    margin: '5px auto',
}

const formikBtn = {
    display: 'flex',
    margin: '5px auto',
}

export default StickerForm