import Header from "./Header"
import MainSection from "./MainSection"

export default function MainContainer() {
  // css
  const cssMain = {
    width: "320px",
    height: "320px",
    backgroundColor: "#F5F5F5",
    borderRadius: "5px",
    padding: "34px"
  }



  return (
    <main style={cssMain}>
      <Header />
      <MainSection />
    </main>
  )
}