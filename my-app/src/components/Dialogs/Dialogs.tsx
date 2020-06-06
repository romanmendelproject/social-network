import React from 'react';
import s from './Dialogs.module.css';
import DialogItem, { propsTypeDialog } from './DialogItem/DialogItem';
import Message, { propsTypeMessage } from './Message/Message';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../redux/dialogs-reducer';

export type propsTypeDialogs = {
    dialogsPage: {
        dialogsData: Array<propsTypeDialog>;
        messagesData: Array<propsTypeMessage>;
        newMessageText: string;
    },
    dispatch: (action: Object) => void;
}

const Dialogs = (props: propsTypeDialogs) => {
    let newMessageElement: any = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreater())
    }

    const onMessangeChange = () => {
        props.dispatch(updateNewMessageTextActionCreater(newMessageElement.current.value))
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
                    <div>
                        <textarea ref={newMessageElement}
                        onChange={onMessangeChange}
                        value={props.dialogsPage.newMessageText}
                        ></textarea>
                    </div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs