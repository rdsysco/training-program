import React from 'react';
import Button from '@material-ui/core/Button';

const AddColorForm = ({ text = "title", value = "#000000", onAddColor }) => {

    let textInput, valueInput;

    const onSubmit = e => {
        e.preventDefault();
        onAddColor(textInput.value, valueInput.value);
        textInput.value = '';
        textInput.focus();
        valueInput.value = '#000000';
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <input className='add-form__input' ref={input => textInput = input} type="text" placeholder="Title color..."></input>
            <input className='add-form__colorPicker' ref={input => valueInput = input} type="color"></input>
            <Button variant="contained" color="primary" type="submit">Add</Button>
        </form>
    )
}

export default AddColorForm;