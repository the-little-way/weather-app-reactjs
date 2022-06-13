import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Results from './results.js';
import NotFound from './404.js';
import { Link, BrowserRouter as Router, Route, Switch, useHistory, Redirect} from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';



 function loadWeather(arg){

    let cityName = arg;

    console.log("fetching data..")

    return new Promise(
      resolve=>{


    fetch('http://localhost:8000/tempData') //real api call would concat params into url eg. `url + ${cityName}`
    .then(res=>{
      return res.json();
    })
    .then(data =>{
      //setTempData(data);
      console.log(data, cityName);
      //tempData = data;
      resolve(data)
      
    })
      }
    )

  };


ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Switch>
        <Route exact path="/">
          <App loadWeather={loadWeather}/>
        </Route>

        <Route path="/results">
          <Results />
        </Route>

        <Route path="*">
          <NotFound />
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
