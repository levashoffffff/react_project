//import logo from './logo.svg';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Friends from './components/Navbar/Friends/Friends.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar state={props.appState.navbar}/>
        <div className="app-wrapper-content">
        <Routes>
          {/*<Route path="/dialogs" element={<Dialogs dialogsData={props.appState.messagesPage.dialogsData} messagesData={props.appState.messagesPage.messagesData}/>}/>
          <Route path="/profile" element={<Profile postData={props.appState.profilePage.postData}/>}/>*/}
          <Route path="/dialogs" element={<Dialogs state={props.appState.dialogsPage} />}/>
          <Route path="/profile" element={<Profile
           state={props.appState.profilePage}
           addPost={props.addPost} />}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
)}


export default App;
