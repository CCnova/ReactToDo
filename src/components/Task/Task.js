import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../ToolBar/Button/Button';
import classes from './Task.css';

const task = (props) => {
    
    function renderTask() {
        if (props.done) {
            return (
                <Aux>
                    <th scope="row">
                        <input type="checkbox" defaultChecked={props.done} onChange={props.checked} className={classes.tableCheck} aria-label="task done" />
                        <Button btText="Delete" clicked={props.delete} />
                    </th>
                    <td><del>{props.name}</del></td>
                    <td><del>{props.doDate}</del></td>
                </Aux>    
            );
        } else {
            return (
                <Aux>
                    <th scope="row">
                        <input type="checkbox" className={classes.tableCheck} defaultChecked={props.done} onChange={props.checked} aria-label="task done" />
                        <Button btText="Delete" clicked={props.delete}/>
                    </th>
                    <td>{props.name}</td>
                    <td>{props.doDate}</td>
                </Aux>
            );
        }
    }

    return (
        renderTask()
    );
};

export default task;