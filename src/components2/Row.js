import React from 'react';
import Circle from './circle';
import Smallcircle from './smallcircle';

class Row extends React.Component {

  state = {
    isCheck: false,
    k: 0,
    attempt: [
      {
        id: 1,
        color: "white"
      },
      {
        id: 2,
        color: "white"
      },
      {
        id: 3,
        color: "white"
      },
      {
        id: 4,
        color: "white"
      }
    ],
    circles: [
      {
        id: 0,
        color: "white",
        colors: "red"

      },
      {
        id: 1,
        color: "white",
        colors: "red"
      },
      {
        id: 2,
        color: "white",
        colors: "red"
      },
      {
        id: 3,
        color: "white",
        colors: "red"
      },
    ]
  };

  renderCircle = () => {
    return (
      this.state.circles.map((x) =>
        <Circle
          key={x.id}
          id={x.id}
          storeTry={this.storeTry}
        />));
  }

  renderSmallcircle = () => {
    return (
      this.state.circles.map((x) =>
        <Smallcircle
          key={x.id}
          color={x.colors}
        />));
  }

  storeTry = (e, id) => {
    this.setState(prevState => {
      const next = prevState.attempt;
      next[id].color = e;

      return { attempt: next };
    });
  }

  btnPress = () => {

    let ans = true;
    let b = 3;
    let arr = [0, 0, 0, 0];

    // ALL WHITE
    for (let i = 0; i < 4; ++i) {
      if (this.state.attempt[i].color === "white") {
        return;
      }

      //GREEN + WHITE semicircles
      if (this.state.attempt[i].color === this.props.correct[i].color) {
        this.setState(prevState => {
          const circ = prevState.circles;
          let a = prevState.k;
          arr[i] = 1;
          circ[a].colors = "green";
          a += 1;
          return { circles: circ, k: a };
        })
      }
      else {
        ans = false;
        let chk = true;
        for (let j = 0; j < 4; ++j)
          if ((arr[j] !== 1) && (this.state.attempt[i].color === this.props.correct[j].color) && (this.state.attempt[j].color !== this.props.correct[j].color)) {
            chk = false;
          }
        if (chk) {
          this.setState(prevState => {
            let circ = prevState.circles;
            console.log(b, "in turn:", i);
            console.log(arr);
            circ[b].colors = "white";
            b -= 1;
            return { circles: circ };
          })
        }
      }
    }

    //CALLBACK FUNCTIONS
    this.props.updateTurn();
    if (ans) {
      this.props.ifCorrect();
    }

    if (this.props.isTurn === '10') {
      if (!ans) {
        this.props.youLose();
      }
    }
    //UPDATE
    this.setState(prevState => ({ isCheck: !prevState.isCheck }))
  }

  render() {
    return (
      <div className="container1">
        <div className="BigC">
          {this.renderCircle()}
        </div>
        <div className={this.props.isTurn === this.props.id ? "btn-div" : "no-show"}>
          <button onClick={this.btnPress}
            className={this.state.isCheck ? "no-show" : "btn"}>CHECK</button>
        </div>
        <div className={this.state.isCheck ? "SmallC" : "no-show"}>
          {this.renderSmallcircle()}
        </div>
      </div>
    );
  }
}

export default Row;