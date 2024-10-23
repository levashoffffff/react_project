/*Данный файл необходим для рендеринга, эти действие необходимо для того, чтобы небыло цикличности между index.js и state.js и мы могли импортировать функцию renderEntireTree в index.js для дальнейшей отрисовки контента, а также импортировать renderEntireTree в state.js для того чтобы повторно запускать root.render в случае какого либо изменения в state.js  */

//----------------Все необходимые импорты из index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import {addPost} from './redux/state.js'
//////////////////Все необходимые импорты из index.js


//--------------Удаляем state чтобы небыло цикличности между render.js и import.js и прокинем в props

//import state from './redux/state.js';

/////////////////Удаляем state чтобы небыло цикличности между render.js и import.js


//-------------Функция для повтрного запуска отрисовки
export let renderEntireTree = (state) => {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost}/>
      {/*<App postData={postData} dialogsData={dialogsData} messagesData={messagesData} />*/}
    </React.StrictMode>
  );
}

//////////////////Функция для повтрного запуска отрисовки
