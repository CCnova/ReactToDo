import React from 'react';
import classes from './Button.css';

const button = (props) => { 
    return (
        <button type="button" className={"btn btn-dark" + classes.buttonSecondary + " " + classes.lightBlue} onClick={props.clicked}>{props.btText}</button>
    );
};

export default button;