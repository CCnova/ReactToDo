import React, { Component } from 'react';
import Task from '../../components/Task/Task';

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskList: [],
        };
    }

    render() {
        return (
            <div>
                <Task />
            </div>
        );
    }    
}

export default TaskList;