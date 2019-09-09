import React from 'react';
import Div from './div';

class Markdown extends React.Component {

  state = {
    value: "",
    part: []
  };

  // handleSplit = (e) => {
  //   this.setState({ part: e.split(" ") });
  // }

  render() {
    return (
      <div className="container">
        <textarea
          onChange={(e) => { this.setState({ value: e.target.value }) }}>
        </textarea>
        <div className="content">
          <Div input = {this.state.value}/>
        </div>
      </div>
    );
  }
}

export default Markdown;

/*
2 components: div comp to decide things and md comp to pass values
both sides rendering 
split words (single words)
if alphanumeric
check enter

*/
