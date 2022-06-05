function SearchBar() {
  return (
    <div className="search-bar">
      <form action="/search" method="post">
        <input className="city-input" placeholder="City Name"/>
        <button className="submit-btn" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar;