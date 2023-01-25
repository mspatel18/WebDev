import React from 'react'
import { useState } from 'react'
import InvestmentCalculator from './components/InvestmentCalculator.jsx'
// import PayoffVsInvest from './components/PayoffVsInvest.jsx'
import FixedDeposit from './components/FixedDeposit.jsx'
import BuyOrRent from './components/BuyOrRent.jsx'
function App() {
  const [currentComponent, setCurrentComponent] = useState('InvestmentCalculator')
  return (
    <div>
      <h1>Wealth Wellness</h1>
      <button onClick={() => setCurrentComponent('InvestmentCalculator')}>Investment Calculator</button>
      {/* <button onClick={() => setCurrentComponent('PayoffVsInvest')}>Pay off vs Invest</button> */}
      <button onClick={() => setCurrentComponent('FixedDeposit')}>Fixed Deposit</button>
      <button onClick={() => setCurrentComponent('BuyOrRent')}>Buy or Rent</button>
      {currentComponent === 'InvestmentCalculator' && <InvestmentCalculator />}
      {/* {currentComponent === 'PayoffVsInvest' && <PayoffVsInvest />} */}
      {currentComponent === 'FixedDeposit' && <FixedDeposit />}
      {currentComponent === 'BuyOrRent' && <BuyOrRent />}

    </div>
  )
}

export default App