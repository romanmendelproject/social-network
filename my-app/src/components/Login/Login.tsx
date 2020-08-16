import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validator';
import { login } from './../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={Input} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />

    </div>
}

const mapStateToProps = (state:any) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)