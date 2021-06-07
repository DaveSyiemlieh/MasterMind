import React from 'react';
import Row from './Components/Row';

class Mastermind extends React.Component {
  state = {
    end: false,
    lose: false,
    showRules: false,
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

  handleRules = ()=>{
    this.setState(prevState=>({showRules:!prevState.showRules}));
  }
  render() {
    let xTurn = this.state.isTurn;
    return (
      <div className="container">
        <p className="help" onClick={this.handleRules}>HELP</p>
        <h1 id="Head">MASTERMIND</h1>
        <div className={this.state.end || this.state.lose ? "no-show" : "container-inner"}>
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
          BETTER LUCK NEXT TIME!
          </div>
        <div className={this.state.showRules ? "Rules" : "no-show"}>
          <h1>RULES</h1>
          <ul>
            <li>Guess the correct combination by clicking on the white circles and choosing a color for all 4 GUESS circles.</li>
            <li>Click on the the on "Check" Button to check whether your answer is correct.</li>
            <li>On Clicking the "Check" button, there will be 4 semi circles that hint you towards the correct answer</li>
            <li>
              <ul>
                <li>Green: Correct Color in the correct position</li>
                <li>Red: Correct Color in the wrong position</li>
                <li>White: Wrong Color</li>
              </ul>
            </li>
            <li>The CHECK circles(Appearing On the Right after clicking "CHECK") do not represent the position of the actual correct answer, it is only an INDICATION. For eg. Green for the first CHECK circle does not mean that the first GUESS circle was correct, it only indicates that ONE of your GUESS circles were correct.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Mastermind;