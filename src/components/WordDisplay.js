import React from 'react';

const WordDisplay = ({ word, guessedLetters }) => {
  const wordArray = word.split('');

  return (
    <div className="wordDisplay">
      {wordArray.map(letter => (
        <span key={letter} className={`wordLetter ${guessedLetters.includes(letter) ? 'revealed' : ''}`}>
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;

// This component is used to display the word that the player is trying to guess, with underscores representing
// unguessed letters and the actual letters being revealed when the player correctly guesses them. The component 
// takes in two props: word: the word that the player is trying to guess; guessedLetters: an array of letters that
// the player has correctly guessed. It then splits the word into an array of letters, maps over the array, and
// returns a span for each letter. The span either displays an underscore if the letter has not been guessed
// or the actual letter if it has been correctly guessed.