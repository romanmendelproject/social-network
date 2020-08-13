import React from 'react';
import s from './Dialogs.module.css';
import DialogItem, { propsTypeDialog } from './DialogItem/DialogItem';
import Message, { propsTypeMessage } from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './../common/FormsControls/FormsControls';
import { required, maxLenghtCreator } from '../../utils/validators/validator';


export type propsTypeDialogs = {
    dialogsPage: {
        dialogsData: Array<propsTypeDialog>;
        messagesData: Array<propsTypeMessage>;
        newMessageText: string;
    },
    isAuth: boolean
    addMessage: (newMessageBody:string) => void;
}

const Dialogs = (props: propsTypeDialogs) => {
    let newMessageElement: any = React.createRef();

    const addNewMessage = (values:any) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogsData.map(d =>
                    <DialogItem name={d.name} id={d.id} face={d.face} />
                )
                }
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messagesData.map(m =>
                    <Message message={m.message} id={m.id} />
                )
                }
                <div className={s.addMessage}>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
            
        </div>
    )
}

const maxLenght100 = maxLenghtCreator(100)

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder='Enter your message' validate={[required, maxLenght100]}/>
            </div>
            <button>Add message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs