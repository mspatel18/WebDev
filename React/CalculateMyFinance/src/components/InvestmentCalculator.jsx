import React, { useState, useEffect } from "react";
import '../styles/InvestmentCalculator.module.css'

export default function InvestmentCalculator() {
    const [currentAge, setCurrentAge] = useState(20);
    const [retirementAge, setRetirementAge] = useState(25);
    const [monthlyContribution, setMonthlyContribution] = useState(5000);
    const [interestRate, setInterestRate] = useState(9);
    const [inflation, setInflation] = useState(6);
    const [output, setOutput] = useState(0);
    const [inflationAdjustedValue, setInflationAdjustedValue] = useState(0);
    const [totalInvestment,setTotalInvesment] = useState(0);
    useEffect(() => {
        let i = (interestRate / 100 )/ 12;
        let n = retirementAge - currentAge;
        setTotalInvesment(monthlyContribution*n*12);
        let i2 = ((1 + interestRate/100) / (1 + inflation/100) - 1) / 12;
        setOutput((monthlyContribution * ((Math.pow(1 + i, n * 12) - 1) / i) * (1 + i)).toFixed(0));
        setInflationAdjustedValue((monthlyContribution * ((Math.pow(1 + i2, n * 12) - 1) / i2) * (1 + i2)).toFixed(0));
    }, [currentAge, retirementAge, monthlyContribution, interestRate, inflation])

    return (
        <>
            <h1>Investment Calculator</h1>
            <p>Enter your investment amount and the interest rate to see how much you will earn in interest.</p>
            <form>
                <div>Current Age</div>
                <input type="number" className="ic-input" value={currentAge} onChange={e => setCurrentAge(e.target.value)} />
                <div>Retirement Age</div>
                <input type="number" value={retirementAge} onChange={e => setRetirementAge(e.target.value)} />
                <div>Monthly Contribution</div>
                <input type="number" value={monthlyContribution} onChange={e => setMonthlyContribution(e.target.value)} />
                <div>Interest Rate</div>
                <input type="number" value={interestRate} onChange={e => setInterestRate(e.target.value)} />
                <div>Inflation</div>
                <input type="number" value={inflation} onChange={e => setInflation(e.target.value)} />
            </form>
            {/* <button onClick={calculate}>Calculate</button> */}
            <div>Total Investment: <div>{totalInvestment}</div></div>
            <div>Total value: <div id="output" >{output}</div></div>
            <div>Inflation adjusted value: <div id="output2">{inflationAdjustedValue}</div></div>
        </>
    );
}

// import React from "react";
// import '../styles/InvestmentCalculator.module.css'
// export default function InvestmentCalculator() {
//     function calculate(){
//         let currentAge = document.querySelector("input[name='currentAge']").value;
//         let retirementAge = document.querySelector("input[name='retirementAge']").value;
//         let p = document.querySelector("input[name='monthlyContribution']").value;
//         let interest =  document.querySelector("input[name='interestRate']").value/100;
//         console.log('interest = '+interest)
//         let i =interest/12;
//         let inflation = document.querySelector("input[name='inflation']").value/100;
//         console.log('inflation = '+inflation)
//         let n = retirementAge - currentAge;
//         document.getElementById("output").innerHTML = (p * ((Math.pow(1 + i, n * 12) - 1) / i) * (1 + i)).toFixed(0);
//         let i2 = ((1+interest)/(1+inflation)-1)/12;
//         console.log(i2)
//         document.getElementById("output2").innerHTML = (p * ((Math.pow(1 + i2, n * 12) - 1) / i2) * (1 + i2)).toFixed(0);
//     }
//     return (
//         <>
//             <h1>Investment Calculator</h1>
//             <p>Enter your investment amount and the interest rate to see how much you will earn in interest.</p>
//             <form>
//                 <div>Current Age</div>
//                 <input type="number" className="ic-input" name="currentAge" />
//                 <div>Retirement Age</div>
//                 <input type="number" name="retirementAge" />
//                 <div>Monthly Contribution</div>
//                 <input type="number" name="monthlyContribution" />
//                 <div>Interest Rate</div>
//                 <input type="number" name="interestRate" />
//                 <div>Inflation</div>
//                 <input type="number" name="inflation" />
//             </form>
//             <button onClick={calculate}>Calculate</button>
//             <div id="output" >0</div>
//             <div>Inflation adjusted value: <div id="output2"></div></div>
//         </>
//     );
// }