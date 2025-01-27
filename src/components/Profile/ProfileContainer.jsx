import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer.js';
//Для функции withRouter
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';

class ProfileContainer extends React.Component {

    componentDidMount() {
        //В переменную попадает id пользователя из URL
        let userId = this.props.router.params.userId;
        //Если userId не задан, то отображаем userId по умолчанию = 2
        if (!userId) {
            userId = 2;
        }
        //Вызов функции thunk
        this.props.getUserProfile(userId);
    }

    render() {
        //Редирект на страницу логин, когда не авторизованы
        /* if(this.props.isAuth == false) {
            return <Navigate to={"/login"} />
        } */

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

//HOC функция принимающая на входе компоненты и возвращает контейнерную компоненту
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    /* isAuth: state.auth.isAuth */
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
let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(withUrlDataContainerComponent);