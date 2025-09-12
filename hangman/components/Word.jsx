import clsx from "clsx"

export default function Word(props)
{


  
  const result= props.word.toUpperCase().split("").map( (letter,index )=> {
    
    const shouldRevealLetter = props.guessedLetters.includes(letter) || props.isGameLost

    return <span className={clsx("letter", props.isGameLost && !props.guessedLetters.includes(letter)&&"letter_gameLost" )}
    key={index}>{ shouldRevealLetter ? letter : ""}</span>

  })

  return(

    <section className="word_container">
      {result}
    </section>
  )

}