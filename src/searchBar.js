import Results from './results.js';
import {useState, useEffect} from 'react';
import React from 'react'
import { BrowserRouter as Router, Route, useHistory, Redirect} from 'react-router-dom'



function SearchBar() {

  let [cityName, setCityName] = useState(null);

  let [Temps, setTemps] = useState(null);



  let handleSubmit = (e) => {

    e.preventDefault(); //prevent page reload by form

    console.log("fetching data..")

    fetch('http://localhost:8000/tempData') //real api call would concat params into url eg. `url + ${cityName}`
    .then(res=>{
      return res.json();
    })
    .then(data =>{
      setTemps(data);
      console.log(data);

    })
  };



  return (
    <div className="search-bar">
      <form onSubmit = {handleSubmit}>
        <input id="cityInput" className="city-input" placeholder="City Name" value={cityName} onChange= {(e)=>setCityName(e.target.value)} required />
        <button className="submit-btn" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar;