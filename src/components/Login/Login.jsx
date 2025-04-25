import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { useNavigate } from "react-router-dom";
import styles from '../common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"email"} placeholder={"Email"} validate={[requiredField]} />
            </div>
            <div>
                <Field component={Input} name={"password"} type={"password"} placeholder={"Password"} validate={[requiredField]} />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            
            {props.error && <div className={styles["form-summary-error"]}>
                {props.error}
            </div>}
            {/* <div>
                <Field component={"input"} name={"login"} placeholder={"Login"} />
            </div>
            <div>
                <Field component={"input"} name={"password"} placeholder={"Password"} />
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
            </div> */}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const ReduxLoginForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)



const Login = (props) => {
    const onSubmit = (formData) => {
        /* console.log(formData); */
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    //При успешной авторизации происходит переход на страницу profile (при помощи хук)
    const navigate = useNavigate();
    if (props.isAuth) {
        return navigate ('/profile')
    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);