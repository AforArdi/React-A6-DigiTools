import './App.css'
import Hero from './Components/Static/Hero'
import Navbar from './Components/Static/Navbar'
import Pricing from './Components/Static/Pricing'
import Stat from './Components/Static/Stat'
import ThreeSteps from './Components/Static/ThreeSteps'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stat></Stat>

      <ThreeSteps></ThreeSteps>
      <Pricing></Pricing>
    </>
  )
}

export default App
