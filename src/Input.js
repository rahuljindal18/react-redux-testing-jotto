import React from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions/index';

export class UnconnectedInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentGuess: null
        }

        this.submitGuessedWord = this.submitGuessedWord.bind(this)
    }

    submitGuessedWord(event){
        event.preventDefault();
        if(this.state.currentGuess && this.state.currentGuess.length > 0)
            this.props.guessWord(this.state.currentGuess);
            this.setState({currentGuess: ''})
    }

    render(){
        const contents = this.props.success
            ? null
            : <form className="form-inline">
                <input 
                    data-test="input-box" 
                    type="text"
                    className="mb-2 mx-sm-3"
                    placeholder="enter guess"
                    value={this.state.currentGuess}
                    onChange={(event) => this.setState({currentGuess: event.target.value})}
                />
                <button
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    onClick={(event) => this.submitGuessedWord(event)}
                    type="submit"
                >
                Submit
                </button>
            </form>
        return(
            <div data-test="component-input">
                {contents}
            </div>
        );
    }
}

const mapStateToProps = ({success}) => {
    return {
        success
    }
}

export default connect(mapStateToProps, {guessWord})(UnconnectedInput);