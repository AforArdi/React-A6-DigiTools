import { useState } from 'react'
import './App.css'
import ProductsSection from './Components/Dynamic/ProductsSection'
import Footer from './Components/Static/Footer'
import Hero from './Components/Static/Hero'
import Navbar from './Components/Static/Navbar'
import Pricing from './Components/Static/Pricing'
import Stat from './Components/Static/Stat'
import ThreeSteps from './Components/Static/ThreeSteps'
import WorkFlow from './Components/Static/WorkFlow'

const getProduct= async ()=>{
  const res = await fetch('/productsData.json');
  return res.json();
}
const productPromise = getProduct();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stat></Stat>

      {/* dynamic part start */}
      <ProductsSection 
      productPromise={productPromise}
      ></ProductsSection>

      {/* dynamic part end */}
      <ThreeSteps></ThreeSteps>
      <Pricing></Pricing>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  )
}

export default App
