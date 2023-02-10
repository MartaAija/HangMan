import React, { useState } from 'react';
import Keyboard from './components/Keyboard';
import WordDisplay from './components/WordDisplay';
import WrongGuesses from './components/WrongGuesses';
import hangmanStates from './components/hangmanStates';
import Readme from './components/readme';
import './App.css';

const words = ["airplane", "book", "camera", "desk", "elephant", "friend", "guitar", "house", "pancakes", "jacket", "kite", "lion", "mountain", "newspaper", "ocean", "panda", "queen", "rabbit", "sun", "train", "umbrella", "violin", "watch", "xylophone", "yellow", "zebra", "airport", "bench", "cat", "dolphin", "egg", "flower", "grass", "horse", "island", "jellyfish", "key", "lighthouse", "money", "oasis", "paint", "quilt", "raccoon", "snowflake", "tree", "umbrella", "volcano", "whale", "medicine", "yak", "zoo", "apartment", "bicycle", "car", "dog", "eggplant", "fish", "grape", "hat", "igloo", "juice", "kangaroo", "laptop", "mirror", "nest", "oasis", "piano", "quilt", "robot", "sailboat", "tiger", "unicorn", "vase", "wallet", "knowledgeable", "yard", "zoo", "apple", "bird", "castle", "doll", "elbow", "foot", "glove", "honey", "igloo", "jewelry", "kettle", "lamp", "mouse", "night", "ocean", "pumpkin", "quilt", "rainbow", "snowman", "tent", "unicorn", "violin", "wolf", "xylophone", "yogurt", "zoo"];
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const App = () => {
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [lettersGuessed, setLettersGuessed] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState(null);
  const [availableLetters, setAvailableLetters] = useState(alphabet);
  const [showReadme, setShowReadme] = useState(false);

  const handleLetterClick = (letter) => {
    if (word.includes(letter) && !lettersGuessed.includes(letter)) {
      setLettersGuessed([...lettersGuessed, letter]);
    } else if (!word.includes(letter) && !lettersGuessed.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
      setLettersGuessed([...lettersGuessed, letter]);
    }

    if (word.split('').every((wordLetter) => lettersGuessed.includes(wordLetter))) {
      setGameStatus('win');
    } else if (wrongGuesses >= 10) {
      setGameStatus('lose');
    }
  };

  const restartGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setLettersGuessed([]);
    setWrongGuesses(0);
    setGameStatus(null);
    setAvailableLetters(alphabet);
  };

  const toggleReadme = () => {
    setShowReadme(!showReadme);
  };

  return (
    <div className="appContainer">
      {gameStatus === 'win' ? (
        <div className="winContainer">
          You Won!
          <button type="button" onClick={restartGame} className="restartButton">
            Restart
          </button>
        </div>
      ) : gameStatus === 'lose' ? (
        <div className="loseContainer">
          You Lost!
          <button type="button" onClick={restartGame} className="restartButton">
            Restart
          </button>
        </div>
      ) : (
        <div className="gameContainer">
          <WordDisplay word={word} guessedLetters={lettersGuessed} />
          <WrongGuesses lettersGuessed={lettersGuessed.filter(letter => !word.includes(letter))} />
          <img src={hangmanStates[wrongGuesses]} alt="Hangman" className="hangmanImage" />
          <Keyboard lettersGuessed={availableLetters} handleLetterClick={handleLetterClick}/>
          <button type="button" onClick={toggleReadme} className="readmeButton">
            Help
          </button>
        </div>    
             )}
             {showReadme && <Readme />}
             </div>
           );    
         };

export default App;

// The code defines the main component App that contains the game logic and display. The App component uses 
// React's useState hook to manage the game's state. The component handles the state of the game, including the
// word to guess, letters that have been guessed, number of wrong guesses, the game status, and the available 
// letters. The state is updated when a player clicks on a letter. The component also has a function that restarts
// the game and a function to toggle the readme. The final display of the component is rendered based on the game
// status, whether it's a win, lose, or in progress. 