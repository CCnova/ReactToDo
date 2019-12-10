import React from 'react';
import Button from './Button/Button';
import UserInput from './UserInput/UserInput';
import classes from './ToolBar.css';

/* TO DO:

    Adicionar funcao de evento para o Button
    Adicionar layout para ficar alinhado os botoes
*/


const toolBar = () => { 
    return (
        <div>
            <ul className={classes.unbulletList}>
                <li className={classes.horizontalEl}>
                    <Button btText="Add"/>
                </li>
                <li className={classes.horizontalEl}>
                    <Button btText="Delete" />
                </li>
            </ul>

            <ul className={classes.unbulletList}>
                <li className={classes.horizontalEl}>
                    <p>Nome:</p>
                    <UserInput />
                </li>
                <li className={classes.horizontalEl}>
                    <p>Data:</p>
                    <UserInput />
                </li>
            </ul>

        </div>
    );
};

export default toolBar;