import React from 'react';

const Button = ({handleClick,buttonName}) => {
    return (
      <button onClick={handleClick}>{buttonName}</button>
    );
  }
  
export default Button;