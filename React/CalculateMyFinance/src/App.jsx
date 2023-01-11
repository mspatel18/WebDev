import React from 'react'
import { useState } from 'react'
import './App.css'
import BuyOrRentHouse from './components/BuyOrRentHouse.jsx'
import InvestmentCalculator from './components/InvestmentCalculator.jsx'

function App() {
  const [currentComponent, setCurrentComponent] = useState('BuyOrRentHouse')
  return (
    <div>
      <button onClick={() => setCurrentComponent('InvestmentCalculator')}>Investment Calculator</button>
      <button onClick={() => setCurrentComponent('BuyOrRentHouse')}>Buy or Rent House</button>
      {currentComponent === 'InvestmentCalculator' && <InvestmentCalculator />}
      {currentComponent === 'BuyOrRentHouse' && <BuyOrRentHouse />}
    </div>
  )
}

export default App