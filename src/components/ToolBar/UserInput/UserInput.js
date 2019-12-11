import React from 'react';

const userInput = (props) => { 
    return (
        <input type="text" onChange={props.onType} placeholder={props.inputName} />
    );
};


export default userInput;