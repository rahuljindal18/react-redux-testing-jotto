import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App, {UnconnectedApp} from './App';

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<App store={store} />).dive().dive();
    return wrapper;
}

describe('redux properties', () => {
    test('has access to `success` state', () => {
        const success = true;
        const wrapper = setup({success});
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });
    test('has access to `secretWord` state', () => {
        const secretWord = 'party';
        const wrapper = setup({secretWord});
        const secretWordProp = wrapper.instance().props.secretWord;
        expect(secretWordProp).toBe(secretWord);
    });
    test('has access to `guessedWords` state', () => {
        const guessedWords = [{guessedWord: 'train', letterMatchCount: 3}];
        const wrapper = setup({guessedWords});
        const guessedWordsProp = wrapper.instance().props.guessedWords;
        expect(guessedWordsProp).toEqual(guessedWords);
    });
    test('`getSecretWord` action creator is a function on the prop', () => {
        const wrapper = setup();
        const getSecretWordProp = wrapper.instance().props.getSecretWord;
        expect(getSecretWordProp).toBeInstanceOf(Function);
    });
});

describe('getSecretWord', () => {
    test('`getSecretWord` runs on app mount', () => {
        const getSecretWordMock = jest.fn();

        const props = {
            getSecretWord: getSecretWordMock,
            success: true,
            guessedWords: []
        }

        //setup app component with getsecretWordMock as the getSecretWord prop
        const wrapper = shallow(<UnconnectedApp {...props}/>)

        //run lifecycle method
        wrapper.instance().componentDidMount();

        //check to see if mock ran
        const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

        expect(getSecretWordCallCount).toBe(1);
    });
});