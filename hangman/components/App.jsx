import Header from "./Header"
import Status from "./Status"
import { languages } from "../languages";
import LanguageChip from "./LanguageChip";
import React from "react";
import Word from "./Word";
import Keyboard from "./Keyboard";
import clsx from "clsx";
import { getRandomWord } from "../utils";
import Confetti from "react-confetti"

export default function App()
{
  const [currentWord,setCurrentWord] = React.useState(()=>getRandomWord())
  const [guessedLetters,setGuessedLetters]= React.useState([])

  const alphabet ="abcdefghijklmnopqrstuvwxyz";

  const wrongGuessCounts= guessedLetters.filter( letter => !currentWord.toUpperCase().includes(letter)).length

  const isGuessWrong =wrongGuessCounts>0 && !currentWord.toUpperCase().includes(guessedLetters[guessedLetters.length-1])
  
  function addGuessedLetter(letter)
  {
    setGuessedLetters(prevGuessedLetters => 
      prevGuessedLetters.includes(letter) ? prevGuessedLetters : [...prevGuessedLetters, letter]
    )
  }

  function newGame()
  {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  }
  

  
  const chipsList = languages.map((language,index) => 
    <LanguageChip 
    key={language.name}
    name={language.name} 
    backgroundColor={language.backgroundColor} 
    color={language.color}
    isDead = {index<wrongGuessCounts}
  />)
  const isGameLost = wrongGuessCounts>= chipsList.length-1
  const isGameWon = currentWord.toUpperCase().split("").every(letter => guessedLetters.includes(letter)) ;
  const isGameOver = isGameLost || isGameWon;




  return(
    <main>
      <Header/>

      <Status isGameWon={isGameWon} isGameLost={isGameLost} isGameOver={isGameOver}
       wrongGuessCounts={wrongGuessCounts} languages={languages.map(lang => lang.name)} isGuessWrong={isGuessWrong}/>

      <section className="chips_container">
        {chipsList}
      </section>
      <Word word={currentWord} guessedLetters={guessedLetters} isGameLost={isGameLost}/>
      <Keyboard keyboard={alphabet} addLetter={addGuessedLetter} guessedLetters={guessedLetters} currentWord={currentWord} isGameOver={isGameOver}/>
      {isGameOver? <button onClick={newGame} className="new-game">New Game</button> : undefined}
      {isGameWon && <Confetti/>}
    </main>
  )
}