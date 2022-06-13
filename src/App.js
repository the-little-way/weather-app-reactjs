//import logo from './logo.svg';
import './App.css';
import ShowDate from './showDate.js';
import SearchBar from './searchBar.js';
import { Link } from 'react-router-dom'  


function App(props) {

  let loadWeather = props.loadWeather;
  //console.log(loadWeather);
  return (
    <div className="hero-section">     
      <header className="App-header">
        <ShowDate />
        <h3>Welcome to Quick Weather</h3>
        <SearchBar loadWeather={loadWeather}/>
      </header>
    </div>
  );
}

export default App;
