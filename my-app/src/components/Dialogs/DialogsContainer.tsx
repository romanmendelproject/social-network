import React, { ComponentType } from 'react';
import { addMessageActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: (newMessageBody:string) => {
            dispatch(addMessageActionCreater(newMessageBody))
        },
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)