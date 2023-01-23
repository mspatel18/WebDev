import React from "react";
import { useState } from "react";

// function calculateInterest(principal, rate, periods) {
//     return (principal * rate * periods) / 100;
// }

export default function PayoffVsInvest() {
    const [loanAmountRemaining, setLoanAmountRemaining] = useState(1000000);
    const [loanInterestRate, setLoanInterestRate] = useState(8);
    const [currentMonth, setCurrentMonth] = useState(15);
    const [monthRemaining, setMonthRemaining] = useState(60);
    const [lumpsumAmount, setLumpsumAmount] = useState(100000);
    const [amountYouCanInvest, setAmountYouCanInvest] = useState(7000);
    const [returnYouCanGenerate, setReturnYouCanGenerate] = useState(0.1);
    // const interestYouPay = loanAmountRemaining * (loanInterestRate / 100);\
    const [interest, setInterest] = useState(0);
    const handleCalculate = () => {
        const result = loanAmountRemaining * Math.pow(1 + loanInterestRate/100, 75);
        setInterest(result.toFixed(2));
    }
    // const totalInvestment = amountYouCanInvest * monthRemaining + lumpsumAmount;
    // const totalInvestmentReturn = totalInvestment * returnYouCanGenerate;
    // const excess = totalInvestmentReturn - interestYouPay;
    // const shouldInvest = excess > 0;
    
    return (
        <>
            <h1>Pay off vs Invest</h1>
            <div>Loan Amount remaining <input type="number" name="LoanAmountRemaining" value={loanAmountRemaining} onChange={e => setLoanAmountRemaining(e.target.value)}/></div>
            <div>Loan Interest Rate <input type="number" name="LoanInterestRate"value={loanInterestRate} onChange={e => setLoanInterestRate(e.target.value)}/>%</div>
            <div>Current Month Of the loan <input type="number" name="CurrentMonth" value={currentMonth} onChange={e => setCurrentMonth(e.target.value)} /></div>
            <div>Months remaining for the loan <input type="number" name="MonthRemaining" value={monthRemaining} onChange={e => setMonthRemaining(e.target.value)} /></div>
            <div>Lumpsum amount you have? <input type="number" name="LumpsumAmount" value={lumpsumAmount} onChange={e => setLumpsumAmount(e.target.value)} /></div>
            <div>AMount you can invest every month? <input type="number" name="AmountYouCanInvest" value={amountYouCanInvest} onChange={e => setAmountYouCanInvest(e.target.value)} /></div>
            <div>Return you can generate every year? <input type="number" name="Return" value={returnYouCanGenerate} onChange={e => setReturnYouCanGenerate(e.target.value)} /></div>

            <div>Over the tenure of your loan <div></div></div>
            <button onClick={handleCalculate}>Calculate</button>
            <div >You will pay interst of: {interest}</div>
        {/* <div>You would have invested: {totalInvestment}</div>
        <div>Your investment would have grown to: {totalInvestmentReturn}</div>
        <div>Which means you made an excess of: {excess}</div>
        <div>This means you should {shouldInvest ? "invest" : "pay off"}</div> */}
        </>
    );
}
