import React from 'react';
import PCirc from './palette-circ';

const Palette = ({isClick,handleClick}) =>{
    return (
      <div className = {isClick?"palette":"no-show"}>
        <PCirc 
        handleClick = {()=>handleClick("red")}
        key = "1"
        color = "red"/>
        <PCirc
        handleClick = {()=>handleClick("blue")}
        key = "2"
        color = "blue"/>
        <PCirc 
        handleClick = {()=>handleClick("orange")}
        key = "3"
        color = "orange"/>
        <PCirc 
        handleClick = {()=>handleClick("yellow")}
        key = "4"
        color = "yellow"/>
        <PCirc 
        handleClick = {()=>handleClick("pink")}
        key = "5"
        color = "pink"/>
        <PCirc 
        handleClick = {()=>handleClick("purple")}
        key = "6"
        color = "purple"/>
      </div>
      
  );
}

export default Palette;