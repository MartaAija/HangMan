import React from 'react';

const Keyboard = ({ lettersGuessed, handleLetterClick }) => (
  <div className="keyboardContainer">
    {lettersGuessed.map(letter => (
      <button 
        key={letter} 
        className="keyboardButton" 
        onClick={() => handleLetterClick(letter)}
      >
        {letter}
      </button>
    ))}
  </div>
);

export default Keyboard;

// This is a React functional component that implements the Keyboard UI in a hangman game. The component takes
// two props as inputs: lettersGuessed: An array of letters that have been guessed by the user; handleLetterClick:
// A function that gets called whenever a letter on the keyboard is clicked. The letter that was clicked is passed 
// as an argument to the function. The component displays a set of buttons, where each button represents a letter
// in the lettersGuessed array. The text on each button is the letter itself. When a button is clicked, the
// handleLetterClick function is called with the letter that was clicked as an argument. The key prop is used 
// to give each button a unique key, which is required when rendering lists in React.




