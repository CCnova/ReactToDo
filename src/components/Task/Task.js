import React from 'react';
import Aux from '../../hoc/Aux';

const task = (props) => {
    
    function renderTask() {
        if (props.done) {
            return (
                <Aux>
                    <th scope="row"><input type="checkbox" defaultChecked={props.done} onChange={props.checked} aria-label="task done" /></th>
                    <td><del>{props.name}</del></td>
                    <td><del>{props.doDate}</del></td>
                </Aux>    
            );
        } else {
            return (
                <Aux>
                    <th scope="row"><input type="checkbox" defaultChecked={props.done} onChange={props.checked} aria-label="task done" /></th>
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