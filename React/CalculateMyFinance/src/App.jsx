import React from 'react'
import { useState } from 'react'
import BuyOrRentHouse from './components/BuyOrRentHouse.jsx'
import InvestmentCalculator from './components/InvestmentCalculator.jsx'
// import PayoffVsInvest from './components/PayoffVsInvest.jsx'
import FixedDeposit from './components/FixedDeposit.jsx'

function App() {
  const [currentComponent, setCurrentComponent] = useState('InvestmentCalculator')
  return (
    <div>
      <h1>Wealth Wellness</h1>
      <button onClick={() => setCurrentComponent('InvestmentCalculator')}>Investment Calculator</button>
      <button onClick={() => setCurrentComponent('BuyOrRentHouse')}>Buy or Rent House</button>
      {/* <button onClick={() => setCurrentComponent('PayoffVsInvest')}>Pay off vs Invest</button> */}
      <button onClick={() => setCurrentComponent('FixedDeposit')}>Fixed Deposit</button>
      {currentComponent === 'InvestmentCalculator' && <InvestmentCalculator />}
      {currentComponent === 'BuyOrRentHouse' && <BuyOrRentHouse />}
      {/* {currentComponent === 'PayoffVsInvest' && <PayoffVsInvest />} */}
      {currentComponent === 'FixedDeposit' && <FixedDeposit />}

    </div>
  )
}

export default App