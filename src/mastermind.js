import React from 'react';
import Row from './components2/Row';

class Mastermind extends React.Component {
  state = {
    end: false,
    lose: false,
    correct: [],
    isTurn: 1,
    list: [{
      id: 1,
      color: 'red'
    },
    {
      id: 2,
      color: 'blue'
    },
    {
      id: 3,
      color: 'orange'
    },
    {
      id: 4,
      color: 'yellow'
    },
    {
      id: 5,
      color: 'pink'
    },
    {
      id: 6,
      color: 'purple'
    }
    ]
  };

  componentDidMount() {
    for (let i = 0; i < 4; ++i) {
      const ran = Math.floor(1 + Math.random() * 6);
      console.log(ran);
      this.setState(prevState => ({
        correct: prevState.correct.concat(
          this.state.list.filter((a) => a.id === ran)
        )
      }));
    }
  }


  youLose = () => {
    this.setState({ lose: true });
  }

  ifCorrect = () => {
    this.setState({ end: true });
  }

  updateTurn = () => {
    this.setState(prevState => ({
      isTurn: prevState.isTurn + 1
    }));
  }

  render() {
    let xTurn = this.state.isTurn;
    return (
      <div className="container">
      <h1>MASTERMIND</h1>
        <div className={this.state.end || this.state.lose? "no-show" : "container-inner"}>
          <Row key='1'
            id='1'
            correct={this.state.correct}
            ifCorrect={this.ifCorrect}
            isTurn={xTurn.toString()}
            updateTurn={this.updateTurn}
          />

          <Row key='2'
            id='2'
            correct={this.state.correct}
            ifCorrect={this.ifCorrect}
            isTurn={xTurn.toString()}
            updateTurn={this.updateTurn}
          />

          <Row key='3'
            id='3'
            correct={this.state.correct}
            ifCorrect={this.ifCorrect}
            isTurn={xTurn.toString()}
            updateTurn={this.updateTurn}
          />

          <Row key='4'
            id='4'
            correct={this.state.correct}
            ifCorrect={this.ifCorrect}
            isTurn={xTurn.toString()}
            updateTurn={this.updateTurn}
          />

          <Row key='5'
            id='5'
            correct={this.state.correct}
            ifCorrect={this.ifCorrect}
            isTurn={xTurn.toString()}
            updateTurn={this.updateTurn}
          />

          <Row key='6'
            id='6'
            correct={this.state.correct}
            ifCorrect={this.ifCorrect}
            isTurn={xTurn.toString()}
            updateTurn={this.updateTurn}
          />

          <Row key='7'
            id='7'
            correct={this.state.correct}
            ifCorrect={this.ifCorrect}
            isTurn={xTurn.toString()}
            updateTurn={this.updateTurn}
          />

          <Row key='8'
            id='8'
            correct={this.state.correct}
            ifCorrect={this.ifCorrect}
            isTurn={xTurn.toString()}
            updateTurn={this.updateTurn}
          />

          <Row key='9'
            id='9'
            correct={this.state.correct}
            ifCorrect={this.ifCorrect}
            isTurn={xTurn.toString()}
            updateTurn={this.updateTurn}
          />

          <Row key='10'
            id='10'
            correct={this.state.correct}
            ifCorrect={this.ifCorrect}
            isTurn={xTurn.toString()}
            updateTurn={this.updateTurn}
            youLose={this.youLose}
          />
        </div>

        <div className={this.state.end ? "end-screen" : "no-show"}>
          YOU WIN
          </div>
        <div className={this.state.lose ? "end-screen" : "no-show"}>
          BETTER LUCK NEXT TIME
          </div>
      </div>
    );
  }
}

export default Mastermind;