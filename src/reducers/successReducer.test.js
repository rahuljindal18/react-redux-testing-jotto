import { actionTypes } from '../actions/index';
import successReducer from './successReducer';

describe('successReducer', () => {
    test('returns default initial state of false when no action is passed', () => {
        const newState = successReducer(undefined, {});
        expect(newState).toBe(false);
    });
    test('returns state `true` when action of type `CORRECT_GUESS` is passed', () => {
        const newState = successReducer(undefined, {type:actionTypes.CORRECT_GUESS});
        expect(newState).toBe(true);
    });
});