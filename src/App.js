//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.appState.navbar} />
        <div className="app-wrapper-content">
          <Routes>
            {/*<Route path="/dialogs" element={<Dialogs dialogsData={props.appState.messagesPage.dialogsData} messagesData={props.appState.messagesPage.messagesData}/>}/>
          <Route path="/profile" element={<Profile postData={props.appState.profilePage.postData}/>}/>*/}
            <Route path="/dialogs" element={<DialogsContainer
              store={props.store}
              state={props.appState.dialogsPage}
              dispatch={props.dispatch} />} />
            {/* <Route path="/profile" element={<Profile
           state={props.appState.profilePage}
           addPost={props.addPost}
           updateNewPostText={props.updateNewPostText} />}/> */}
            <Route path="/profile/*" element={<ProfileContainer
              store={props.store}
              /* state={props.appState.profilePage} */
              state={props.appState.profilePage}
              dispatch={props.dispatch} />} />

            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
