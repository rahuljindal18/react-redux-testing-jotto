import {getLetterMatchCount} from './index';

describe('getLetterMatchCount', () => {
    const secretWord = 'party';
    test('returns correct count when there are no matching caharaters', () => {
        const letterMatchCount = getLetterMatchCount('bones',secretWord);
        expect(letterMatchCount).toBe(0);
    });
    test('returns correct count when there are 3 matching characters', () => {
        const letterMatchCount = getLetterMatchCount('train',secretWord);
        expect(letterMatchCount).toBe(3);
    });
    test('returns correct count when there are duplicate charaters in the guess', () => {
        const letterMatchCount = getLetterMatchCount('parka',secretWord);
        expect(letterMatchCount).toBe(3);
    });
})