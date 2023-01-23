import React from 'react'
import { useState,useEffect } from 'react'

export default function FixedDeposit() {
    const [principalAmount, setPrincipalAmount] = useState(100000)
    const [interest, setInterest] = useState(7)
    const [timePeriod, setTimePeriod] = useState(21)
    const [frequency, setFrequency] = useState(1)
    const [maturityAmount, setMaturityAmount] = useState(principalAmount * (1 + interest / 100 / frequency) ** (frequency * timePeriod/12))
    useEffect(() => {
        setMaturityAmount(principalAmount * (1 + interest / 100 / frequency) ** (frequency * timePeriod/12))
    }, [principalAmount, interest, timePeriod, frequency])
    return(
        <>
            <h1>Fixed Deposit</h1>
            <div>Principal Amount <input type="number" defaultValue={principalAmount} onChange={e => setPrincipalAmount(e.target.value)}  /></div>
            <div>Interest Rate <input type="number" defaultValue={interest} onChange={e => setInterest(e.target.value)} />% p.a.</div>
            <div>Time Period <input type="number" defaultValue={timePeriod} onChange={e => setTimePeriod(e.target.value)}/>month</div>
            <div>Compunding Frequency <input type="number" defaultValue={frequency} onChange={e => setFrequency(e.target.value)} /></div>
            <div>Maturity Amount <div>{maturityAmount}</div></div>
        </>
    )
}