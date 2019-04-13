import React from 'react';

const AddColorForm = ({text="title",value="#000000",onAddColor}) => {

    let textInput,valueInput;

    const onSubmit = e => {
        e.preventDefault();
        onAddColor(textInput.value, valueInput.value);
    }

    return(  
        <form onSubmit={onSubmit}>
            <input ref={ input => textInput = input }  type="text" placeholder="title color..."></input>
            <input ref={ input => valueInput = input }  type="color"></input>
            <button type="submit">Add</button>
        </form>
    )
}
    
export default AddColorForm;