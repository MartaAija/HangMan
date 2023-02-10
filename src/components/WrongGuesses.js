import React from 'react';

const WrongGuesses = ({ lettersGuessed }) => (
  <div className="wrongGuessesContainer">
    <div className="wrongGuessesText">Wrong Guesses:</div>
    <div className="wrongGuessesLetters">{lettersGuessed.join(', ')}</div>
  </div>
);

export default WrongGuesses;

// This is a functional component in React that displays the letters guessed by the user that are not in the word 
// to be guessed in a hangman game. The component takes an array of letters (lettersGuessed) as its props and 
// displays them in a container with appropriate class names for styling. The component returns a div with two 
// nested divs. The first div contains text that reads "Wrong Guesses", while the second div displays the actual
// letters guessed by the user, separated by commas.
