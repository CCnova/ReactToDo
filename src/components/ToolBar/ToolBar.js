import React, { Component } from 'react';
import Button from './Button/Button';
import UserInput from './UserInput/UserInput';
import classes from './ToolBar.css';

/* TO DO:

    Adicionar funcao de evento para o Button
    Adicionar layout para ficar alinhado os botoes
*/


class ToolBar extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            taskName: '',
            taskDate: '',
            taskNumber: 0,
        };
    }

    nameTyped= (event) => {
        let newTaskName = event.target.value;

        this.setState({
            taskName: newTaskName
        });
    }

    dateTyped = (event) => {
        let newTaskDate = event.target.value;

        this.setState({
            taskDate: newTaskDate
        });
    }

    getTaskIndex = (event) => {
        let newTaskIndex = event.target.value;

        this.setState({
            taskNumber: newTaskIndex
        });
    }

    userTypedHandler = (event, inputField) => {
        if (inputField === 'name') {
            this.nameTyped(event);
        } else if(inputField === 'date') {
            this.dateTyped(event);
        } else {
            this.getTaskIndex(event);
        }
    }

    addNewTaskHandler = () => { 
        let newTaskName = this.state.taskName;
        let newTaskDate = this.state.taskDate;

        this.props.toAdd(newTaskName, newTaskDate);
    };

    deleteTaskHandler = () => { 
        let delTaskNumber = this.state.taskNumber;

        this.props.toDelete(delTaskNumber);
    };

    render() {
        return(
            <div>
                <ul className={classes.unbulletList}>
                    <li className={classes.horizontalEl}>
                        <Button btText="Add" clicked={this.addNewTaskHandler}/>
                    </li>
                    <li className={classes.horizontalEl}>
                        <Button btText="Delete" clicked={this.deleteTaskHandler}/>
                    </li>
                    <li className={classes.horizontalEl}>
                        <p>Delete task of number:</p>
                        <UserInput onType={(event) => this.userTypedHandler(event, 'delete')} />
                    </li>
                </ul>
    
                <ul className={classes.unbulletList}>
                    <li className={classes.horizontalEl}>
                        <p>Nome:</p>
                        <UserInput onType={(event) => this.userTypedHandler(event, 'name')}/>
                    </li>
                    <li className={classes.horizontalEl}>
                        <p>Data:</p>
                        <UserInput onType={(event) => this.userTypedHandler(event, 'date')} />
                    </li>
                </ul>
    
            </div>
        );
    }
};

export default ToolBar;