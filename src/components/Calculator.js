import React from 'react';
import Button from './Button';

class Calculator extends React.Component {

  state = {
    value: "",
    history: [],
    show: false
  };

  playerInput = React.createRef();

  handleRecall = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  handleDel = () => {
    this.setState(prevState => ({
      value: prevState.value.slice(0, prevState.value.length - 1),
      history: prevState.history.concat(prevState.value)
    }));
  }

  handleClick = (op) => {
    this.setState(prevState => ({
      value: prevState.value.concat(op),
      history: prevState.history.concat(prevState.value)
    }));
  }

  handleEqual = () => {
    this.setState(prevState => ({
      value: eval(prevState.value).toString(),
      history: prevState.history.concat(prevState.value)
    }));
  }

  render() {
    return (
      <div className="container">
        <h1>Calculator</h1>
        <input onChange={() => this.setState({ value: this.playerInput.current.value })} className="out"
          type="text"
          value={this.state.value}
          ref={this.playerInput}
        />
        <button onClick={() => this.setState({ value: "" })}>Clear</button>
        <Button
          buttonName="Del"
          handleClick={this.handleDel}
        />
        <Button
          buttonName="*"
          handleClick={() => this.handleClick('*')}
        />

        <Button
          buttonName="/"
          handleClick={() => this.handleClick('/')}
        />
        <Button
          buttonName="1"
          handleClick={() => this.handleClick('1')}
        />
        <Button
          buttonName="2"
          handleClick={() => this.handleClick('2')}
        />
        <Button
          buttonName="3"
          handleClick={() => this.handleClick('3')}
        />
        <Button
          buttonName="+"
          handleClick={() => this.handleClick('+')}
        />
        <Button
          buttonName="4"
          handleClick={() => this.handleClick('4')}
        />
        <Button
          buttonName="5"
          handleClick={() => this.handleClick('5')}
        />
        <Button
          buttonName="6"
          handleClick={() => this.handleClick('6')}
        />
        <Button
          buttonName="-"
          handleClick={() => this.handleClick('-')}
        />
        <Button
          buttonName="7"
          handleClick={() => this.handleClick('7')}
        />
        <Button
          buttonName="8"
          handleClick={() => this.handleClick('8')}
        />
        <Button
          buttonName="9"
          handleClick={() => this.handleClick('9')}
        />
        <Button
          buttonName="="
          handleClick={() => this.handleEqual()}
        />
        <Button
          buttonName="Recall"
          handleClick={() => this.handleRecall()}
        />
        <Button
          buttonName="0"
          handleClick={() => this.handleClick('0')}
        />

        <div onClick={this.handleRecall} className={this.state.show ? "history-show" : "history"}>
          Close
          {this.state.history.map((x, index) => {
            return (
              <li onClick={() => {
                return (
                  this.setState({ value: x }),
                  this.setState({ history: this.state.history.slice(0, index) }));
              }}>{x}</li>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Calculator