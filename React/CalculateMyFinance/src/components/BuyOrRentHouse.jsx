import React from "react";
import {useEffect} from 'react';

import housestyle from '../styles/BuyOrRentHouse.module.css';

function calculate(){

    //buying

    //registration amount
    let costOfProperty = parseInt(document.querySelector("input[name='costOfProperty']").value);
    let registrationPercentage = document.querySelector("input[name='registrationPercentage']").value;
    let registrationAmount = costOfProperty * registrationPercentage/100;
    document.getElementById("registrationAmount").innerHTML = registrationAmount;
    //total upfront
    let downPaymentPercentage = document.querySelector("input[name='downPaymentPercentage']").value;
    let downPaymentAmount = costOfProperty * downPaymentPercentage/100;
    document.getElementById("downPaymentAmount").innerHTML = downPaymentAmount;
    let totalUpFront = 0;
    const totalUpfronts = document.getElementsByClassName("totalupfront");
    Array.from(totalUpfronts).forEach(function(totalUpfront) {
        totalUpfront.innerHTML = registrationAmount + downPaymentAmount;
        totalUpFront = registrationAmount + downPaymentAmount;
    });
    //loan amount
    let loanAmount = costOfProperty - downPaymentAmount;
    document.getElementById("loanAmount").innerHTML = loanAmount;
    //emi per month
    let interestRate = document.querySelector("input[name='interestRate']").value;
    let rate = interestRate / 100 / 12;
    let loanDuration = document.querySelector("input[name='loadDuration']").value;
    let nper = loanDuration * 12;
    let pv = loanAmount;
    document.getElementById("emiPerMonth").innerHTML=((pv*rate)/(1-(Math.pow(1+rate, -nper)))).toFixed(0);

    //effective interest rate
    let taxBracket = document.querySelector("input[name='taxBracket']").value;
    let effectiveInterestRate = interestRate * (1-taxBracket/100);
    document.getElementById("effectiveInterestRate").innerHTML = effectiveInterestRate.toFixed(2);
    //effective emi per month
    rate = effectiveInterestRate / 100 / 12;
    document.getElementById("effectiveEmiPerMonth").innerHTML=((pv*rate)/(1-(Math.pow(1+rate, -nper)))).toFixed(0);

    //total interest paid
    let totalInterestPaid = (document.getElementById("effectiveEmiPerMonth").innerHTML * nper) - pv;
    document.getElementById("totalInterest").innerHTML = totalInterestPaid.toFixed(0);
    //maintenance per month
    let maintenanceAmount = document.querySelector("input[name='maintenanceAmount']").value;
    let maintenanceAmountPerMonth = costOfProperty * maintenanceAmount/100/12
    document.getElementById("maintenanceAmountPerMonth").innerHTML = maintenanceAmountPerMonth;
    //total maintenance
    let avgYearlyIncrease = document.querySelector("input[name='avgYearlyIncrease']").value/100;
    let duration = document.querySelector("input[name='period']").value;
    let totalMaintenanceCost = 0;
    for(let i = 0; i < duration; i++){
        totalMaintenanceCost += maintenanceAmountPerMonth * 12 * (1 + avgYearlyIncrease);
        maintenanceAmountPerMonth *= (1 + avgYearlyIncrease);
    }
    document.getElementById("totalMaintenance").innerHTML = totalMaintenanceCost.toFixed(0);
    //total cost
    let totalCostOfHouse = costOfProperty + registrationAmount + totalInterestPaid + totalMaintenanceCost;
    document.getElementById("totalCostOfHouse").innerHTML = totalCostOfHouse.toFixed(0)
    //value after period
    let percentageIncrease = document.querySelector("input[name='percentageIncrease']").value/100;
    let valueAfterPeriod = costOfProperty * (1 + percentageIncrease) ** duration;
    document.getElementById("valueAfterPeriod").innerHTML = valueAfterPeriod.toFixed(0);
    //net benefit
    let netBenefitHouse = valueAfterPeriod - totalCostOfHouse;
    document.getElementById("netBenefitHouse").innerHTML = netBenefitHouse.toFixed(0);


    //renting


    //effective monthly rent
    let monthlyRent = document.querySelector("input[name='monthlyRent']").value;
    let hraTaxBenefit = document.querySelector("input[name='hraTaxBenefit']").value;
    document.getElementById("effectivemonthlyRent").innerHTML = (monthlyRent * (1-hraTaxBenefit/100)).toFixed(0);
    //total rent
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
    // additional amount you cann invest
    let effectiveEmiPerMonth = document.getElementById("effectiveEmiPerMonth").innerHTML;
    let additionalAmount = effectiveEmiPerMonth - effectiveMonthlyRent ;
    document.getElementById("additionalAmount").innerHTML = additionalAmount.toFixed(0);
    let returnYouCanGenerate = document.querySelector("input[name='returnYouCanGenerate']").value/100;
    let valueOfUpFrontAmount = totalUpFront * Math.pow((1 + returnYouCanGenerate), period) / Math.pow((1 ), period)
    document.getElementById("valueOfUpFrontAmount").innerHTML = valueOfUpFrontAmount.toFixed(0);
    let i = returnYouCanGenerate/12;
    let monthlyAmountAfterPeriod =parseInt((additionalAmount * ((Math.pow(1 + i, period * 12) - 1) / i) * (1 + i)).toFixed(0));
    document.getElementById("monthlyAmountAfterPeriod").innerHTML = monthlyAmountAfterPeriod;
    let netBenefitRenting = valueOfUpFrontAmount + monthlyAmountAfterPeriod - totalRent;
    document.getElementById("netBenefitRenting").innerHTML = netBenefitRenting.toFixed(0);
    if(netBenefitRenting > netBenefitHouse){
        document.getElementById("BuyOrRent").innerHTML = "Rent";
    }else{
        document.getElementById("BuyOrRent").innerHTML = "Buy";
    }   

}
export default function BuyOrRentHouse() {
    useEffect(() => {
        calculate();
    }, []);
    return(
        <>
            <h1>Buy or Rent House</h1>
            <h1>In this Case You should <span id="BuyOrRent"></span> a house</h1>
            <div className={housestyle.wrapper}>
                <div className={housestyle.rentColumn} >
                    <div>Analysis Period: <input type="number" name="period" defaultValue={30} onChange={calculate}/>years</div>
                    <div>Financial for Renting a house</div>
                    <div>Monthly Rent: <input type="number" name="monthlyRent"defaultValue={15000} onChange={calculate}/></div>
                    <div>HRA Tax Benefit: <input type="number" name="hraTaxBenefit"defaultValue={20} onChange={calculate}/>%</div>
                    <div>Avg Yearly Increase: <input type="number" name="avgIncrease" defaultValue={10} onChange={calculate}/>%</div>
                    <div>Effective Monthly Rent: <div id="effectivemonthlyRent" style={{ backgroundColor: "#6eea6e" }}>0</div></div>
                    <div>Total rent over the period: <div id="totalrent" style={{ backgroundColor: "#6eea6e" }}>0</div> (This amount is not inflation adjusted)</div>
                    <div>This is your expense. But you also gain if you invest the amount of downpayment and also</div>
                    <div>the additional interest you will pay beyond your monthly rent</div>
                    <div>So this should be added as a benefit to renting a house</div>
                    <div>Total upfront amount (incl registration) <div className="totalupfront"></div></div>
                    <div>Additional monthly amount you can invest <div id="additionalAmount"></div> Monthly Interest minus rent(which increse every year)</div>
                    <div>Return you can generate <input type="number" name="returnYouCanGenerate" defaultValue={10}/>%</div>
                    <div>Value of upfron amount after the period <div id="valueOfUpFrontAmount"></div></div>
                    <div>Value of monthly amounts after the period <div id="monthlyAmountAfterPeriod"></div></div>
                    <div>Net benefit of renting a house <div id="netBenefitRenting"></div>Negative Rent amount plus amount you earned</div>
                    <div>Negative number means you paid more than </div>
                </div>

                <div className={housestyle.buyingColumn}>
                    <div>Cost of the property: <input type="number" name="costOfProperty" defaultValue={9000000} onChange={calculate}/></div>
                    <div>Registration % <input type="number" name="registrationPercentage" defaultValue={5} onChange={calculate}/>%</div>
                    <div>Registration Amount : <div id="registrationAmount">0</div></div>
                    <div>Downpayment % <input type="number" name="downPaymentPercentage" defaultValue={25} onChange={calculate}/>%</div>
                    <div>Downpayment Amount <div id="downPaymentAmount"></div></div>
                    <div>Total upfront amount (incl registration) <div className="totalupfront"></div></div>
                    <div>Loan Amount: <div id="loanAmount"></div></div>
                    <div>Interest Rate on Loan % <input type="number" name="interestRate" defaultValue={7} onChange={calculate}/>%</div>
                    <div>Loan Duration in years <input type="number" name="loadDuration" defaultValue={20} onChange={calculate}/></div>
                    <div>EMI per month: <div id="emiPerMonth"></div></div>  
                    <div>Tax bracket <input type="number" name="taxBracket" defaultValue={20}/>%</div>
                    <div>Effective Interest Rate % <div id="effectiveInterestRate"></div></div>
                    <div>Effective EMI per month <div id="effectiveEmiPerMonth"></div></div>
                    <div>Total Interest over the period <div id="totalInterest"></div></div>
                    <div>Maintenance Amount(% of cost) <input type="number" name="maintenanceAmount" defaultValue={0.5} onChange={calculate}/>% Usually it is 0.5% annually</div>
                    <div>Maintenance Amount per month <div id="maintenanceAmountPerMonth"></div></div>
                    <div>Avg. yearly increase % <input type="number" name="avgYearlyIncrease" defaultValue={5} onChange={calculate}/>%</div>
                    <div>Total maintenance over the period <div id="totalMaintenance"></div></div>
                    <div>Total cost of buying the house (Cost of house + Interest + maintenance) <div id="totalCostOfHouse"></div></div>
                    <div>The value of the house increase as well every year</div>
                    <div>Property will increase by <input type="number" name="percentageIncrease" defaultValue={8} onChange={calculate}/>% every year</div>
                    <div>Value of property after this period <div id="valueAfterPeriod"></div> </div>
                    <div>So net benefit of buying a house is <div id="netBenefitHouse"></div> Value of property minus cost of property, after the period</div>
                    <div>Negatve value means, buying a house costs you more in this period</div>
                </div>
            </div>
        </>
    )
}