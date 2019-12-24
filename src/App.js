import React from 'react';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[{
          guessedWord:'train',letterMatchCount:3
        }]}/>
      </div>
    );
  }
  
}

export default App;
