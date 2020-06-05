import React from 'react';
import s from './Dialogs.module.css';
import DialogItem, { propsTypeDialog } from './DialogItem/DialogItem';
import Message, { propsTypeMessage } from './Message/Message';
import { propsType } from '../../App';

export type propsTypeDialogs = {
    state: {
        dialogsData: Array<propsTypeDialog>;
        messagesData: Array<propsTypeMessage>;
    }
}

const Dialogs = (props: propsTypeDialogs) => {
    let newMessageElement: any = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogsData.map(d =>
                    <DialogItem name={d.name} id={d.id} face={d.face} />
                )
                }
            </div>
            <div className={s.messages}>
                {props.state.messagesData.map(m =>
                    <Message message={m.message} id={m.id} />
                )
                }
                <div className={s.addMessage}>
                    <div>
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs