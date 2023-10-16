import { useState } from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import "./App.css";
import ProductionHouse from './components/ProductionHouse';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header/>
      <Slider/>
      <ProductionHouse/>
    </div>
  )
}

export default App
