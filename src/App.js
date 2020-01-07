import React from 'react';
import {connect} from 'react-redux';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import {getSecretWord} from './actions/index';
import './App.css';

export class UnconnectedApp extends React.Component {
  componentDidMount(){
    this.props.getSecretWord();
  }
  render(){
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <Input/>
        <GuessedWords guessedWords={this.props.guessedWords}/>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  const {secretWord, success, guessedWords} = state;
  return {secretWord, success, guessedWords};
}

export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);
