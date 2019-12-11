import React, { Component } from 'react';
import Task from '../../components/Task/Task';
import classes from './TaskList.css';
import ToolBar from '../../components/ToolBar/ToolBar';

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskList: [<Task name="Task1" doDate="Amanha" />],
        };
    }

    // newTask = <Task name="Task1" doDate="Amanha" />;
    // newTaskList = [this.newTask];

    deleteTask = (taskNumber) => {
        let newTaskList = this.state.taskList;

        newTaskList.splice(taskNumber - 1, 1);

        this.setState({
            taskList: newTaskList
        });
    }

    addTask = (newTaskName, newTaskDate) => {
        let newTask = <Task name={newTaskName} doDate={newTaskDate} />

        let newTaskList = this.state.taskList;
        newTaskList.push(newTask);

        this.setState({
            taskList: newTaskList
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.taskList.map(task => {
                        return <li className={classes.taskEl}>{task}</li>;
                    })}
                </ul>
                <ToolBar toDelete={this.deleteTask} toAdd={this.addTask}/>
            </div>
        );
    }    
}

export default TaskList;