
//------------Удаляем импорты т.к. они есть в render.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, { subscribe } from './redux/redux-store.js';
import StoreContext from './StoreContext.js';
import {Provider} from 'react-redux';
//import {addPost, updateNewPostText} from './redux/state.js';


//////////////Удаляем импорты т.к. они есть в render.js


//------------Импорт функции из render.js
/* import { renderEntireTree } from './render.js'; */
///////////////Импорт функции из render.js


//-------------Эти данные перенсли в state.js

/* //ПОСТЫ 
let postData = [
  {id: 1, message: 'Hi, how are you', count: 15},
  {id: 2, message: 'It s my first post', count: 20}
];

//ДИАЛОГИ
let dialogsData = [
  {id: 1, name: 'Andrey'},
  {id: 2, name: 'Artur'},
  {id: 3, name: 'Katya'},
  {id: 4, name: 'Victor'},
  {id: 5, name: 'Valera'},
];

//СООБЩЕНИЯ
let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Hello'},
]; */

/////////////////Эти данные перенсли в state.js


//--------------ДАННЫЙ УЧАСТОК КОДА ПЕРЕНЕСЛИ В render.js

/*const root = ReactDOM.createRoot(document.getElementById('root'));
const renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost}/>
      {/*<App postData={postData} dialogsData={dialogsData} messagesData={messagesData} />
    </React.StrictMode>
  );
}
*/

///////////////ДАННЫЙ УЧАСТОК КОДА ПЕРЕНЕСЛИ В render.js

//Вызвали функцию из render.js
/* renderEntireTree(state); */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* let renderEntireTree = () => { */
  root.render(
    <React.StrictMode>
      {/* <App appState={store.getState()} 
          addPost={store.addPost.bind(store)} 
          updateNewPostText={store.updateNewPostText.bind(store)} /> */}
      {/*<App postData={postData} dialogsData={dialogsData} messagesData={messagesData} />*/}
      <Provider store={store}>
        <App store={store} appState={store.getState()} 
          dispatch={store.dispatch.bind(store)} />
      </Provider>
    </React.StrictMode>
  );
/* } */

/* renderEntireTree(); */

/* store.subscribe(renderEntireTree); */

/* store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
}) */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
