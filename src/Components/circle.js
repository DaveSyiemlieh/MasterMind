import React from 'react';
import Palette from './palette';

class Circle extends React.Component {
  state = {
    color: "white",
    isClick: false
  };

  handleClick = (color) => {
    this.setState({ color });
    this.props.storeTry(color,this.props.id);
    this.setState(prevState => ({
      isClick: !prevState.isClick
    }));
  }


  render() {
    return (
      <div className="circle">
        <svg height="60" width="60">
          <circle onClick={() => {
            this.setState(prevState => ({
              isClick: !prevState.isClick
            }));
          }}
            cx="30" cy="30" r="20" stroke="black" stroke-width="3" fill={this.state.color} />
        </svg>
        <Palette isClick={this.state.isClick}
          isColor={this.props.isColor}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Circle;
