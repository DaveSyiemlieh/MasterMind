import React from 'react';

const PCirc = ({handleClick,color})=>{

  return (
    <svg height="30" width="30">
      <circle onClick = {handleClick}
      cx="15" cy="15" r="10" stroke="black" stroke-width="3" fill={color}
    />
    </svg>
  );
  }

export default PCirc;
