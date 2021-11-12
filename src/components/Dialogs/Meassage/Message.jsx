import dialogsStyle from "../Dialogs.module.css";
import React from 'react';


let Message = (props) => {
    return (
        <div className={dialogsStyle.message}> {props.message} </div>
    )
}

export default Message;