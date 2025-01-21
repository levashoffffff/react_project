import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer.js';
//Для функции withRouter
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        //В переменную попадает id пользователя из URL
        let userId = this.props.router.params.userId;
        //Если userId не задан, то отображаем userId по умолчанию = 2
        if(!userId) {
            userId = 2;
        }
        //Вызов функции thunk
        this.props.getUserProfile(userId);
    }

    render() {
        //Редирект на страницу логин, когда не авторизованы
        if(this.props.isAuth == false) {
            return <Navigate to={"/login"} />
        }

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

//Описание функции withRouter
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

//Вызов функции, в переменную попадает контейнерная компонента, но с элементами URL
let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(withUrlDataContainerComponent);