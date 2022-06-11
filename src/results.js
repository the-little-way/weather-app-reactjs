import ShowDate from './showDate.js';
import WeatherCard from './weatherCard.js';
import HourlyForecast from './hourlyForecast.js';
import DailyForecast from './dailyForecast.js';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


// use npx json-server --watch data/db.json --port 8000
// this data would be sent from the backend to the /search route, then passed to this component via props
//let tempData = {
//    cityName : "Lisbon",
//    val : 10,
//    desc : "Clear skies",
//    daily: [15, 10, 15, 20, 22, 20, 18],
//    hourly: [15, 17, 13, 10, 5]
//  };

function Results() {
  return (
    <div className="App-header">     
      
      <ShowDate />
      
      <div className="results-section">
        <WeatherCard />
        <div className="mini-section">
          <HourlyForecast />
          <DailyForecast />
        </div>
      </div>
      
      <Link to="/" role="button" className="btn btn-primary">Click here to go back</Link>

    </div>
  );
}

export default Results;
