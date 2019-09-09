import React from 'react';

const Smallcircle = ({color}) => {
  return (
    <svg height="30" width="30">
      <circle cx="15" cy="15" r="10" stroke="black" stroke-width="3" fill={color}
    />
    </svg>
  );
}

export default Smallcircle;
