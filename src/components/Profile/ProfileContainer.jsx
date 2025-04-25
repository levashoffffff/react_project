import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer.js';
//Для функции withRouter
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';

class ProfileContainer extends React.Component {

    componentDidMount() {
        //В переменную попадает id пользователя из URL
        let userId = this.props.router.params.userId;
        //Если userId не задан, то отображаем отображаем наш id
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        //Вызов функции thunk
        this.props.getUserProfile(userId);
        //Делаем запрос на получение статуса
        this.props.getStatus(userId);
    }

    render() {
        //Редирект на страницу логин, когда не авторизованы
        /* if(this.props.isAuth == false) {
            return <Navigate to={"/login"} />
        } */

        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

//HOC функция принимающая на входе компоненты и возвращает контейнерную компоненту
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
    /* console.log('mapStateToProps: Profile'); */
    return ({
        profile: state.profilePage.profile,
        //Получаем статус из state
        status: state.profilePage.status,
        /* isAuth: state.auth.isAuth */
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    })
};

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
let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })(withUrlDataContainerComponent);