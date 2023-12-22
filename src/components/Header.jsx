export default function Header() {
  //css
  const cssDiscriptionText = {
    margin: "0",
    fontFamily: "Inter",
    fontSize: "13px",
    color: "#4A4E74"
  }
  
  return (
    <header>
      <h1 style={{margin: "0"}}>Tenzies</h1>
      <p style={cssDiscriptionText}>
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>
    </header>
  )
}