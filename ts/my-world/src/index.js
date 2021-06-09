import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Subject from './Subject';
import Subject2 from './Subject2';
import reportWebVitals from './reportWebVitals';
import {Router,Route,Switch,Redirect} from 'react-router-dom';
import {createBrowserHistory} from "history";
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
  <Switch>
    <Route path="/Subject" component={Subject} />
    <Route path="/Subject2" component={Subject2} />
    <Redirect from="/" to="/Subject" />
  </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
