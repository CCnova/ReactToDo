import React from 'react';
import logo from '../../logo.svg';
import classes from './TopBar.css';

const topBar = () => { 
    return (
        <header className={classes.topHead}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <span className={classes.topName}>React To Do</span>
        </header>
    );
};

export default topBar;