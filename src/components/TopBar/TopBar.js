import React from 'react';
import classes from './TopBar.css';

const topBar = () => { 
    return (
        // <header className={classes.topHead}>
        //     <img src={logo} alt="logo" className={classes.logo}/>
        //     <span className={classes.topName}>React To Do</span>
        // </header>

        <div className={classes.header}>
            <div className={classes.headerRight}><span>React To Do</span></div>
        </div>
    );
};

export default topBar;