import React from 'react';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props: any) => {
    let state = props.store.getState()

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreater())
    }

    const onMessangeChange = (newMessage:string) => {
        props.store.dispatch(updateNewMessageTextActionCreater(newMessage))
      }

    return (
        <Dialogs addMessage = {addMessage} onMessangeChange = {onMessangeChange} dialogsPage={state.dialogsPage}/>
    )
}

export default DialogsContainer