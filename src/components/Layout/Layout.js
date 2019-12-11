import React from 'react';
import Aux from '../../hoc/Aux';
import TopBar from '../TopBar/TopBar';
import logo from '../../assets/logo.svg';
import classes from './Layout.css';

const layout = (props) => { 
    return (<Aux>
        <TopBar />
        <div className={classes.logoRegion}>
            <img src={logo} className={classes.logo} alt="Logo"/>
        </div>
        {props.children}
    </Aux>);


};



export default layout;