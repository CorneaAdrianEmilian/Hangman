import clsx from "clsx"


export default function LanguageChip(props) 
{
  return(
    <div className={clsx( "chip", props.isDead && "lost")} style={{backgroundColor: props.backgroundColor,color: props.color}}> {props.name} </div>
  )
}