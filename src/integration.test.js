import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions/index';

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';
    describe('no guessed words', () => {
        let store;
        const initiaLState = {secretWord};
        beforeEach(() => {
            store = storeFactory(initiaLState);
        });
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initiaLState,
                success: false,
                guessedWords: [
                    {
                        guessedWord: unsuccessfulGuess,
                        letterMatchCount: 3
                    }
                ]
            }
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initiaLState,
                success: true,
                guessedWords: [
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            }
            expect(newState).toEqual(expectedState);
        });
    });
    describe('guessed words', () => {
        const guessedWords = [ { guessedWord:'agile',letterMatchCount:1 } ];
        const initialState = { guessedWords, secretWord };
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3} ]
            }
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [...guessedWords, { guessedWord: secretWord, letterMatchCount: 5}]
            }
            expect(newState).toEqual(expectedState);
        });
    });
});