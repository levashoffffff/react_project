import React from "react";
import Header from "./Header";
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then((response) => {
            //Если мы авторизованы, код пришел 0
            if(response.data.resultCode === 0) {
                //Сделали деструктуризацию, в data сидят эти свойства id, login, email
                let {id, login, email} = response.data.data;
                //В этом случае диспатчим авторизационные данные. Очень внимательно с последовательностью. Такая же как в reducers!!!
                this.props.setAuthUserData(id, email, login);
            }
        });
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);