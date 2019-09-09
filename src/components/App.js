import React from 'react';
import Course from './Course';

const App = (props) => {
  return (
    <div className="container">
      {props.courses.map( course => 
        <Course
          {...course}
          key={course.id}
        />
      )}
    </div>
  );
}

export default App;
