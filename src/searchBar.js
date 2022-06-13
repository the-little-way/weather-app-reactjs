import {useState, useEffect} from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, useHistory, Redirect, withRouter} from 'react-router-dom';


function SearchBar(props) {

  let history = useHistory();

  let loadWeather = props.loadWeather;
  
  let [cityName, setCityName] = useState("");

  async function handleSubmit(e){
    e.preventDefault(); //prevent page reload by form
    
    let x = await loadWeather(cityName)
    if(x){
      console.log('done');
      history.push({pathname : '/results', state: { tempData : x} });
    }

    //const {router} = e.target.props
    //router.push('/results')
  }


  return (
    <div className="search-bar">
      <form onSubmit = {handleSubmit}>
        <input id="cityInput" className="city-input" placeholder="City Name" value={cityName} onChange= {(e)=>setCityName(e.target.value)} required />
        <button className="submit-btn" type="submit">Search</button>
      </form>
    </div>
  )
}


export  default withRouter(SearchBar);