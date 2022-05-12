import React from 'react';

var headings = {
  first: 'Movie',
  last: "List"
};

var Heading = () => (
  <div>
    <h1>{headings.first + ' ' + headings.last + '!'}</h1>
  </div>
);

export default Heading;