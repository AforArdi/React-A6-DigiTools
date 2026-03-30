import './App.css'
import Footer from './Components/Static/Footer'
import Hero from './Components/Static/Hero'
import Navbar from './Components/Static/Navbar'
import Pricing from './Components/Static/Pricing'
import Stat from './Components/Static/Stat'
import ThreeSteps from './Components/Static/ThreeSteps'
import WorkFlow from './Components/Static/WorkFlow'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stat></Stat>

      <ThreeSteps></ThreeSteps>
      <Pricing></Pricing>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  )
}

export default App
