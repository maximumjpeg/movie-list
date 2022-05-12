import React from 'react';

import ListItem from './listEntry.jsx';



var MovieList = (props) => <ul>{props.movies.map((item, index) => (<ListItem key={index} item={item.title}/>))}</ul>;

export default MovieList;