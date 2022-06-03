import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

let listdata = [
  {id : 4, title : "대연중 기말고사 예상문제", grade : "중3", teacher : "현우진T", date : "2022.01.30", views : 0, likes : 0},
  {id : 1, title : "세림중 중간고사 middle test", grade : "중2", teacher : "김명준T", date : "2022.01.26", views : 0, likes : 0}
];

function reducer(state = listdata, action){
  if (action.type === '조회수증가'){
    let copy = [...state];
    copy[action.num].views++;
    return copy
  }else{
    return state
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
