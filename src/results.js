import ShowDate from './showDate.js';
import HourlyForecast from './hourlyForecast.js';
import DailyForecast from './dailyForecast.js';
import './App.css';
import { Link } from 'react-router-dom';


function Results() {
  return (
    <div className="results-section">     
      <ShowDate />
      <HourlyForecast />
      <DailyForecast />
      <Link to="/" role="button" className="btn btn-primary">Click here to go back</Link>
    </div>
  );
}

export default Results;
