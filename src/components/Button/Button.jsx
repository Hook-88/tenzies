import './Button.css'

export default function Button(props) {
  const {children} = props

  return(
    <button 
      style={
        {
          marginTop: "10px"
        }
      }
    >
      {children}
    </button>
  )
}