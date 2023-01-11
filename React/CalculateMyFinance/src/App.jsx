import React from 'react'
import { useState } from 'react'
import BuyOrRentHouse from './components/BuyOrRentHouse.jsx'
import InvestmentCalculator from './components/InvestmentCalculator.jsx'

function App() {
  const [currentComponent, setCurrentComponent] = useState('BuyOrRentHouse')
  return (
    <div>
      <h1>Wealth Wellness</h1>
      <button onClick={() => setCurrentComponent('InvestmentCalculator')}>Investment Calculator</button>
      <button onClick={() => setCurrentComponent('BuyOrRentHouse')}>Buy or Rent House</button>
      {currentComponent === 'InvestmentCalculator' && <InvestmentCalculator />}
      {currentComponent === 'BuyOrRentHouse' && <BuyOrRentHouse />}
    </div>
  )
}

export default App