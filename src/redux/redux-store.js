import {combineReducers, legacy_createStore as createStore}  from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducers";

//Подключаем наши reducers
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    navbar: navbarReducer,
    userPage: usersReducer
});

//Создаем store
let store = createStore(reducers);

//Сделали переменную глобальной, чтобы обращатьсяк ней в консоле
window.store = store;

export default store;

/* import {combineReducers, legacy_createStore} from "redux"
let store = legacy_createStore(); */