import React from 'react';
import MovieList from './movieList.jsx';
import Heading from './headings.jsx';
import SearchBar from './search.jsx';
import AddMovie from './addMovie.jsx';

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

var moviesTotal = [];
var moviesShown = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      displayedMovies: moviesShown,
      movieCollection: moviesTotal,
      test: '',
      addMovieInput: '',
      toWatchList: [],
      watchedList: []
    }
    this.searchHandler = this.searchHandler.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

   searchHandler = function() {
    if (this.state.searchInput === '') {
      window.alert('🚨 Please fill out the search form 🚨');
    } else {
      var matchedTitles = [];
      for (var i = 0; i < this.state.movieCollection.length; i++) {
        var currentFilm = this.state.movieCollection[i];
        var currentTitle = this.state.movieCollection[i].title;
        if (currentTitle.toLowerCase().includes(this.state.searchInput.toLowerCase())) {
          matchedTitles.push(currentFilm);
        }
        if (i === this.state.movieCollection.length - 1 && matchedTitles.length === 0) {
          window.alert('No movie by that name found 🙃');
        }
        if (i === this.state.movieCollection.length - 1 && matchedTitles.length > 0) {
          console.log('The following titles match your search!', matchedTitles);
          this.setState({displayedMovies: matchedTitles});
        }
      }
    }
  };

  inputChange = function(e) {
    console.log('target value', e.target.value);
    console.log('state:', this.state);
    console.log('e target name:', e.target.name);
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state.test);
  }

  handleKeyDown = function(e) {
    console.log('made it to the handler!');
    if (e.key === 'Enter') {
      props.searchHandler(value);
    }
  }

  handleAddMovie = function() {
    console.log(this.state);
    if (this.state.addMovieInput === '') {
      window.alert('🚨 Please fill out the Add Movie entry field 🚨');
    } else {

      moviesTotal.push({'title': this.state.addMovieInput});
      this.setState({movieCollection: moviesTotal});
      this.setState({displayedMovies: moviesTotal});
    }
  }

  render() {
    return (
      <div>
        {/* {console.log('App method handleKeyDown', this.handleKeyDown)} */}
        <Heading/>
        <AddMovie inputChange={this.inputChange} handleAddMovie={this.handleAddMovie}/>
        <SearchBar searchHandler={this.searchHandler} inputChange={this.inputChange} />
        <MovieList movies={this.state.displayedMovies}/>
      </div>
    );
  }
}


export default App;

