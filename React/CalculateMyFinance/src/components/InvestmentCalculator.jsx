import React from "react";
import '../styles/InvestmentCalculator.module.css'
export default function InvestmentCalculator() {
    function calculate(){
        let currentAge = document.querySelector("input[name='currentAge']").value;
        let retirementAge = document.querySelector("input[name='retirementAge']").value;
        let p = document.querySelector("input[name='monthlyContribution']").value;
        let interest =  document.querySelector("input[name='interestRate']").value/100;
        console.log('interest = '+interest)
        let i =interest/12;
        let inflation = document.querySelector("input[name='inflation']").value/100;
        console.log('inflation = '+inflation)
        let n = retirementAge - currentAge;
        document.getElementById("output").innerHTML = (p * ((Math.pow(1 + i, n * 12) - 1) / i) * (1 + i)).toFixed(0);
        let i2 = ((1+interest)/(1+inflation)-1)/12;
        console.log(i2)
        document.getElementById("output2").innerHTML = (p * ((Math.pow(1 + i2, n * 12) - 1) / i2) * (1 + i2)).toFixed(0);
    }
    return (
        <>
            <h1>Investment Calculator</h1>
            <p>Enter your investment amount and the interest rate to see how much you will earn in interest.</p>
            <form>
                <div>Current Age</div>
                <input type="number" className="ic-input" name="currentAge" />
                <div>Retirement Age</div>
                <input type="number" name="retirementAge" />
                <div>Monthly Contribution</div>
                <input type="number" name="monthlyContribution" />
                <div>Interest Rate</div>
                <input type="number" name="interestRate" />
                <div>Inflation</div>
                <input type="number" name="inflation" />
            </form>
            <button onClick={calculate}>Calculate</button>
            <div id="output" >0</div>
            <div>Inflation adjusted value: <div id="output2"></div></div>
        </>
    );
}