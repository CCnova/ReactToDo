import React from 'react';
import logo from '../../logo.svg';
import classes from './TopBar.module.css';

const topBar = () => { 
    return (
        <header className={classes.topHead}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <span>React To Do</span>
        </header>
    );
};

export default topBar;