import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
let answer = false;


class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
  }

verifyMath = () => {
	if ((value1 + value2 + value3) == proposedAnswer){
    	answer = true;
    }
}

verifyUserAnswer = (userAnswer) => {
    if ((value1 + value2 + value3) == proposedAnswer){
      answer = true;
      console.log('answer='+answer);
    }
    if (userAnswer === answer){
        this.setState((numCorrect) => {
            numCorrect: numCorrect + 1;
        })
    }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button 
            onClick={this.verifyUserAnswer(true)}
          >True</button>
          <button
            onClick={this.verifyUserAnswer(false)}
          >False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
