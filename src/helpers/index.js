
/**
 * @function Function to get the letter count
 * @param {string} guessedWord 
 * @param {string} secretWord 
 * @return {number} letter match count
 */
export function getLetterMatchCount(guessedWord, secretWord){
    const guessedLetterSet = new Set(guessedWord.split(''));
    const secretLetterSet = new Set(secretWord.split(''));
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}