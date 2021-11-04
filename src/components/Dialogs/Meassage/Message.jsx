import dialogsStyle from "../Dialogs.module.css";


let Message = (props) => {
    return (
        <div className={dialogsStyle.message}> {props.message} </div>
    )
}

export default Message;