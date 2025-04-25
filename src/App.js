//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import LoginPage from './components/Login/Login.jsx';
import { connect } from 'react-redux';
/* import { getAuthUserData } from "./redux/auth-reducer.js"; */
import { initializeApp } from './redux/app-reducer.js';

import React from 'react';
import Preloader from './components/common/Preloader/Preloader.jsx';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    //Если не инициализированы
    if(!this.props.initialized) {
      return <Preloader/>
    }
    //После инициализации
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar state={this.props.appState.navbar} />
          <div className="app-wrapper-content">
            <Routes>
              {/*<Route path="/dialogs" element={<Dialogs dialogsData={props.appState.messagesPage.dialogsData} messagesData={props.appState.messagesPage.messagesData}/>}/>
            <Route path="/profile" element={<Profile postData={props.appState.profilePage.postData}/>}/>*/}
              <Route path="/dialogs" element={<DialogsContainer
                store={this.props.store}
                state={this.props.appState.dialogsPage}
                dispatch={this.props.dispatch} />} />
              {/* <Route path="/profile" element={<Profile
             state={props.appState.profilePage}
             addPost={props.addPost}
             updateNewPostText={props.updateNewPostText} />}/> */}
              <Route path="/profile/:userId?" element={<ProfileContainer
                store={this.props.store}
                /* state={props.appState.profilePage} */
                state={this.props.appState.profilePage}
                dispatch={this.props.dispatch} />} />

              <Route path="/users" element={<UsersContainer />} />

              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
