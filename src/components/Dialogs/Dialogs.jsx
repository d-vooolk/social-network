import dialogsStyle from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Meassage/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import React from 'react';


function Dialogs(props) {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} id={message.id}/>);


    let addNewMessage = (values) => {
        props.sendMessageCreator(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/Login'} />;

    return (
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogsItem}> {dialogsElements} </div>
            <div className={dialogsStyle.messages}>
                <div> {messagesElements} </div>
            </div>

            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={'newMessageBody'}
                placeholder={'Enter your message'}
                validate={[required, maxLength50]}
            />
            <div><button>send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;