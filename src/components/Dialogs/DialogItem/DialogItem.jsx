import dialogsStyle from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from 'react';

let DialogItem = (props) => {
    let path = '/messages/' + props.id
    return (
        <div className={dialogsStyle.dialog + ' ' + dialogsStyle.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;