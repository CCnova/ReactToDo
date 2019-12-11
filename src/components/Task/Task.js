import React, { Component } from 'react';
import classes from './Task.css';
import Aux from '../../hoc/Aux';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
            doDate: '',
            done: false
        };
    }



    render() {
        return (
            <Aux>
                <span className={classes.taskProp}>Name: {this.props.name}</span>
                <span className={classes.taskProp}>Date: {this.props.doDate}</span>
            </Aux>
        );
    }
}

export default Task;