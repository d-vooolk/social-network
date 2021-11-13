import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import React from 'react';

const maxLength20 = maxLengthCreator(20);

const LoginForm = ({handleSubmit, error, captcha}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField('email', 'email', Input, [required, maxLength20])}
            {createField('password', 'password', Input, [required, maxLength20], {type: 'password'})}
            {createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'Remember me')}

            {captcha && <img src={captcha} /> }
            {captcha && createField('captcha', 'captcha', Input, [required], {})}

            {error && <div> {error} </div>}

            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login} )(Login);