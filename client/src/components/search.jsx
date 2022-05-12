import React from 'react';

var SearchBar = (props) => (
  <div>
    <input type="search" id="movie-list-search" name="searchInput" placeholder="movie name" onChange={props.inputChange} onKeyDown={e => {
      console.log('key pressed:', e.key);
      if (e.key === 'Enter') {props.searchHandler()}
      }}/>
    <input type="search" name="test" placeholder="test" onChange={props.inputChange}/>
    <button onClick={props.searchHandler} >Search</button>
  </div>
);

export default SearchBar;
