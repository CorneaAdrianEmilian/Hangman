import clsx from "clsx";


export default function Keyboard(props)
{
  
  const keyboardElements= props.keyboard.toUpperCase().split("").map((letter)=>{

    const isCorrect = props.guessedLetters.includes(letter) && props.currentWord.toUpperCase().includes(letter)
    const isWrong = props.guessedLetters.includes(letter) && !props.currentWord.toUpperCase().includes(letter)
    
    return <button key={letter} onClick={()=> props.addLetter(letter)}
     disabled={props.isGameOver} aria-label={`Letter ${letter}`} aria-disabled={props.guessedLetters.includes(letter)} 
     className=
    {clsx(
        "keyboard_button",
        isCorrect && "keyboard_button_correct",
        isWrong && "keyboard_button_wrong"
      )} 
      
    >{letter}</button>
  })

return(
  <section className="keyboard_container">
    {keyboardElements}
  </section>
)
}