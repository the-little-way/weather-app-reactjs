import {useState} from 'react';

function SearchBar() {

  //let data = null;

  let handleSubmit(){
    fetch()
    .then()
    .then()
  };

  return (
    <div className="search-bar">
      <form onSubmit = {handleSubmit}>
        <input id="cityInput" className="city-input" placeholder="City Name" required />
        <button className="submit-btn" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar;
