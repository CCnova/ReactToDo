import React, { Component } from 'react';
import Task from '../../components/Task/Task';
import classes from './TaskList.css';

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskList: [],
        };
    }

    newTask = <Task name="Task1" doDate="Amanha" />;
    newTaskList = [this.newTask];

    render() {
        return (
            <div>
                <ul>
                    {this.newTaskList.map(task => {
                        return <li className={classes.taskEl}>{task}</li>;
                    })}
                    {this.newTaskList.map(task => {
                        return <li className={classes.taskEl}>{task}</li>;
                    })}
                    {this.newTaskList.map(task => {
                        return <li className={classes.taskEl}>{task}</li>;
                    })}

                </ul>
            </div>
        );
    }    
}

export default TaskList;