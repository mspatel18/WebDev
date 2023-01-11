import React from "react";
import {useEffect} from 'react';

import housestyle from '../styles/BuyOrRentHouse.module.css';

function calculateRent(){
    let monthlyRent = document.querySelector("input[name='monthlyRent']").value;
    let hraTaxBenefit = document.querySelector("input[name='hraTaxBenefit']").value;
    document.getElementById("effectivemonthlyRent").innerHTML = (monthlyRent * (1-hraTaxBenefit/100)).toFixed(0);
    let avgYearlyRentIncrease = document.querySelector("input[name=avgIncrease").value/100;
    let period = document.querySelector("input[name='period']").value;
    let effectiveMonthlyRent = monthlyRent * (1 - hraTaxBenefit/100);
    let yearlyRent = effectiveMonthlyRent * 12;

    let totalRent =0;
    for (let i = 0; i < period; i++) {  
        totalRent += yearlyRent;
        yearlyRent += yearlyRent * avgYearlyRentIncrease;
    }
    document.getElementById("totalrent").innerHTML=totalRent.toFixed(0);
}
function calculateBuying(){
    let costOfProperty = document.querySelector("input[name='costOfProperty']").value;
    let registrationPercentage = document.querySelector("input[name='registrationPercentage']").value;
    let registrationAmount = costOfProperty * registrationPercentage/100;
    document.getElementById("registrationAmount").innerHTML = registrationAmount;
    let downPaymentPercentage = document.querySelector("input[name='downPaymentPercentage']").value;
    let downPaymentAmount = costOfProperty * downPaymentPercentage/100;
    document.getElementById("downPaymentAmount").innerHTML = downPaymentAmount;
    document.getElementById("totalupfront").innerHTML = registrationAmount + downPaymentAmount;
    let loanAmount = costOfProperty - downPaymentAmount;
    document.getElementById("loanAmount").innerHTML = loanAmount;
    let interestRate = document.querySelector("input[name='interestRate']").value;
    let rate = interestRate / 100 / 12;
    let loanDuration = document.querySelector("input[name='loadDuration']").value;
    let nper = loanDuration * 12;
    let pv = loanAmount;
    document.getElementById("emiPerMonth").innerHTML=((pv*rate)/(1-(Math.pow(1+rate, -nper)))).toFixed(0);
}
export default function BuyOrRentHouse() {
    useEffect(() => {
        calculateRent();
        calculateBuying();
    }, []);
    return(
        <>
            <h1>Buy or Rent House</h1>
            <div className={housestyle.wrapper}>
                <div className={housestyle.rentColumn} >
                    <div>Analysis Period: <input type="number" name="period" defaultValue={30} onChange={calculateRent}/>years</div>
                    <div>Financial for Renting a house</div>
                    <div>Monthly Rent: <input type="number" name="monthlyRent"defaultValue={15000} onChange={calculateRent}/></div>
                    <div>HRA Tax Benefit: <input type="number" name="hraTaxBenefit"defaultValue={20} onChange={calculateRent}/>%</div>
                    <div>Avg Yearly Increase: <input type="number" name="avgIncrease" defaultValue={10} onChange={calculateRent}/>%</div>
                    <div>Effective Monthly Rent: <div id="effectivemonthlyRent" style={{ backgroundColor: "#6eea6e" }}>0</div></div>
                    <div>Total rent over the period: <div id="totalrent" style={{ backgroundColor: "#6eea6e" }}>0</div> (This amount is not inflation adjusted)</div>
                </div>

                <div className={housestyle.buyingColumn}>
                    <div>Cost of the property: <input type="number" name="costOfProperty" defaultValue={9000000} onChange={calculateBuying}/></div>
                    <div>Registration % <input type="number" name="registrationPercentage" defaultValue={5} onChange={calculateBuying}/>%</div>
                    <div>Registration Amount : <div id="registrationAmount">0</div></div>
                    <div>Downpayment % <input type="number" name="downPaymentPercentage" defaultValue={25} onChange={calculateBuying}/>%</div>
                    <div>Downpayment Amount <div id="downPaymentAmount"></div></div>
                    <div>Total upfront amount (incl registration) <div id="totalupfront"></div></div>
                    <div>Loan Amount: <div id="loanAmount"></div></div>
                    <div>Interest Rate on Loan % <input type="number" name="interestRate" defaultValue={7}/>%</div>
                    <div>Loan Duration in years <input type="number" name="loadDuration" defaultValue={20}/></div>
                    <div>EMI per month: <div id="emiPerMonth"></div></div>  
                    <div>Tax bracket <input type="number" name="taxBracket" defaultValue={20}/>%</div>

                </div>
            </div>
        </>
    )
}