import dialogsStyle from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

let DialogItem = (props) => {
    let path = '/messages/' + props.id
    return (
        <div className={dialogsStyle.dialog + ' ' + dialogsStyle.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;