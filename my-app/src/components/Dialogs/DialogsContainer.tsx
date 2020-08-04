import React from 'react';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreater())
        },
        onMessangeChange: (newMessage: string) => {
            dispatch(updateNewMessageTextActionCreater(newMessage))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer