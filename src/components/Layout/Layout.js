import React from 'react';
import Aux from '../../hoc/Aux';
import TopBar from '../TopBar/TopBar';
import ToolBar from '../ToolBar/ToolBar';

const layout = (props) => { 
    return (<Aux>
        <TopBar />
        {props.children}
        <ToolBar />
    </Aux>);


};



export default layout;