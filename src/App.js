//import logo from './logo.svg';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
          <Route path="/profile" element={<Profile postData={props.postData}/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
)}


export default App;
