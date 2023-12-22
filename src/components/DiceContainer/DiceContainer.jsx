import "./DiceContainer.css"
import Die from "../Die/Die"

export default function DiceContainer() {

  const diceArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
  const diceElsArray = diceArray.map(die => <Die>{die}</Die>)

  return (
    <ul style={{marginTop: "30px"}}>
      {diceElsArray}
    </ul>
  )
  
}