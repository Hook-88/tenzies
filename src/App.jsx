import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./components/MainContainer"
import MainContainer from './components/MainContainer'

function App() {

  return (
    <div
      style={
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          paddingBottom: "30em",
          backgroundColor:" #0B2434"
        }
      }
    >
      <MainContainer />
    </div>
  )
}

export default App
