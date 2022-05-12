import React from 'react';

var AddMovie = (props) => (
  <div>
    <input type="search" id="add-movie-form" name="addMovieInput" placeholder="movie name" onChange={props.inputChange} onKeyDown={e => {
      console.log('key pressed:', e.key);
      if (e.key === 'Enter') {props.handleAddMovie();}
    }}/>
    <button onClick={props.handleAddMovie}>Add Movie</button>
  </div>
);

export default AddMovie;