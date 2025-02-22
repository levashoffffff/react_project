import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"login"} placeholder={"Login"} validate={[requiredField]} />
            </div>
            <div>
                <Field component={Input} name={"password"} placeholder={"Password"} validate={[requiredField]} />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
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



const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

export default Login;