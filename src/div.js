import React from 'react';

class Div extends React.Component {

  state = {
    part: ""
  };


  render() {
    const { input } = this.props;
    this.setState({ part: input.split(" ") });
    return (
      this.state.part  
    );
  }
}

export default Div;