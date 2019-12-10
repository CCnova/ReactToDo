import React, { Component } from 'react';
import classes from './Task.css';

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
        <div className={classes.taskDescription}>
            <span className={classes.taskProp}>Name: {this.props.name}</span>
            <span className={classes.taskProp}>Date: {this.props.doDate}</span>
        </div>
        );
    }
}

export default Task;