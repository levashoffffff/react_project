import {applyMiddleware, combineReducers, legacy_createStore as createStore}  from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducers";
import authReducer from "./auth-reducer";
import { thunk as thunkMiddleware } from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

//Подключаем наши reducers
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    navbar: navbarReducer,
    userPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

//Создаем store
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//Сделали переменную глобальной, чтобы обращатьсяк ней в консоле
window.store = store;

export default store;

/* import {combineReducers, legacy_createStore} from "redux"
let store = legacy_createStore(); */