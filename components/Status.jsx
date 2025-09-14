import clsx from "clsx"
import {getFarewellText} from "../utils"

export default function Status(props)
{

function renderStatus()
{
if(!props.isGameOver )
  {

    if(props.isGuessWrong)
    {
      return (
        <>
          <h2> {getFarewellText(props.languages[props.wrongGuessCounts-1])}</h2>
        </>
      )
    }
          
  }
if(props.isGameWon)
  {
    return(
      <>
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </>
    )
  }
  if(props.isGameLost)
    {
          return(
      <>
        <h2>Game Over!</h2>
        <p>You lose! Bettar start learning Assembly 😭</p>
      </>
    )
    }

     return (null)
}


return(
  <section aria-live="polite" role="status" 
  
  className={clsx("status_container",
   props.isGameWon && "won",
   props.isGameLost&& "lost",
   !props.isGameOver && props.isGuessWrong && "farewell_message")}>

    {renderStatus()}

  </section>
)

}