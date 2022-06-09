import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Results from 'results.js';
import NotFound from '404.js';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'  
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Switch>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>

      <Switch>
        <Route path="/results">
          <Results />
        </Route>
      </Switch>

      <Switch>
        <Route path="*">
          <404.js />
        </Route>
      </Switch>

    </Router>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
