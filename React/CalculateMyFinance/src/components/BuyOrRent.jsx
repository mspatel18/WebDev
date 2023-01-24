import React,{ useState, useEffect } from "react";
import housestyle from '../styles/BuyOrRentHouse.module.css';
export default function BuyOrRent() {
    const [duration, setDuration] = useState(30);
    const [costOfProperty,setCostOfProperty] = useState(parseInt(9000000));
    const [registrationPercentage,setRegistrationPercentage] = useState(5);
    const [registrationAmount,setRegistrationAmount] = useState(0);
    const [downPaymentPercentage,setDownPaymentPercentage] = useState(25);
    const [downPaymentAmount,setDownPaymentAmount] = useState(0);
    const [totalUpFrontCost,setTotalUpFrontCost] = useState(0);
    const [loanAmount,setLoanAmount] = useState(0);
    const [interestRate,setInterestRate] = useState(7);
    const [loanTenure,setLoanTenure] = useState(20);
    const [emi,setEmi] = useState(0);
    const [taxBracket,setTaxBracket] = useState(20);
    const [effectiveInterestRate,setEffectiveInterestRate] = useState(0);
    const [effectiveEmiPerMonth,setEffectiveEmiPerMonth] =  useState(0);
    const [totalInterest,setTotalInterest] = useState(0);
    const [maintenancePercentage,setMaintenancePercentage] = useState(0.5);
    const [maintenanceAmountPerMonth,setMaintenanceAmountPerMonth] = useState(0);
    const [avgYearlyIncreaseInPropertyPrice,setAvgYearlyIncreaseInPropertyPrice] = useState(5);
    const [totalMaintenanceCost,setTotalMaintenanceCost] = useState(0);
    const [totalCostOfHouse,setTotalCostOfHouse] = useState(0);
    const [percentageIncrease,setPercentageIncrease] = useState(8);
    const [valueAfterPeriod,setvalueAfterPeriod] = useState(0);
    const [netBenefitHouse,setNetBenefitHouse] = useState(0);

    //renting

    const [monthlyRent,setMonthlyRent] = useState(15000);
    const [hraTaxBenefit,setHraTaxBenefit] = useState(20);
    const [avgYearlyIncreaseInRent,setAvgYearlyIncreaseInRent] = useState(10);
    const [effectiveMonthlyRent,setEffectiveMonthlyRent] = useState(0);
    const [yearlyRent,setYearlyRent] = useState(0);
    const [totalRent,setTotalRent] = useState(0);
    const [additionalAmount,setAdditionalAmount] = useState(0);
    const [returnYouCanGenerate,setReturnYouCanGenerate] = useState(10);
    const [valueOfUpFrontAmount,setValueOfUpFrontAmount] = useState(0);
    const [monthlyAmountAfterPeriod,setMonthlyAmountAfterPeriod] = useState(0);
    const [netBenefitRent,setNetBenefitRent] = useState(0);
    const [action,setAction] = useState("buy");
    useEffect(() => {
        //Buy
        setRegistrationAmount((costOfProperty * registrationPercentage / 100));
        setDownPaymentAmount(costOfProperty * downPaymentPercentage / 100);
        setTotalUpFrontCost(registrationAmount + downPaymentAmount);
        setLoanAmount(costOfProperty - downPaymentAmount);
        setEmi(parseFloat(loanAmount * interestRate / 100 / 12 * (1 + interestRate / 100 / 12) ** (loanTenure * 12) / ((1 + interestRate / 100 / 12) ** (loanTenure * 12) - 1)));
        setEffectiveInterestRate(parseFloat((interestRate * (1 - taxBracket / 100))));
        
        setEffectiveEmiPerMonth(parseFloat((loanAmount * effectiveInterestRate / 100 / 12 * (1 + effectiveInterestRate / 100 / 12) ** (loanTenure * 12) / ((1 + effectiveInterestRate / 100 / 12) ** (loanTenure * 12) - 1))));
        // console.log(loanAmount, effectiveInterestRate, loanTenure, effectiveEmiPerMonth);
        setTotalInterest(parseInt((effectiveEmiPerMonth * loanTenure * 12 - loanAmount)));
        // console.log(totalInterest, effectiveEmiPerMonth, loanTenure, loanAmount);
        setMaintenanceAmountPerMonth(parseInt(costOfProperty * maintenancePercentage / 100 / 12));
        let totalMaintenanceCost = 0;
        let maintenance = maintenanceAmountPerMonth;
        for(let i = 0; i < duration; i++){
            totalMaintenanceCost += maintenance * 12 * (1 + avgYearlyIncreaseInPropertyPrice/100);
            maintenance *= (1 + avgYearlyIncreaseInPropertyPrice/100);
        }
        setTotalMaintenanceCost(parseFloat(totalMaintenanceCost));
        setTotalCostOfHouse(parseInt((costOfProperty + registrationAmount + totalInterest + totalMaintenanceCost)));
        console.log(maintenanceAmountPerMonth.toLocaleString());
        setvalueAfterPeriod(parseFloat(costOfProperty * (1 + percentageIncrease/100) ** duration));
        setNetBenefitHouse(valueAfterPeriod - totalCostOfHouse);
        // console.log();
        //Rent
        setEffectiveMonthlyRent(monthlyRent * (1 - hraTaxBenefit/100));
        setYearlyRent(effectiveMonthlyRent * 12);
        let totalRent = 0;
        for(let i = 0; i < duration; i++){
            totalRent += yearlyRent * (1 + avgYearlyIncreaseInRent/100) ** i;
        }
        setTotalRent(parseFloat(totalRent));
        setAdditionalAmount(effectiveEmiPerMonth - effectiveMonthlyRent)  
        setValueOfUpFrontAmount(parseFloat((totalUpFrontCost * (1 + returnYouCanGenerate/100) ** duration)));  
        let i = returnYouCanGenerate/100/12;
        setMonthlyAmountAfterPeriod(parseFloat((additionalAmount * (((1 + i) ** (duration * 12) - 1) / i) * (1 + i))));
        setNetBenefitRent(parseInt(valueOfUpFrontAmount + monthlyAmountAfterPeriod - totalRent));
        console.log((valueOfUpFrontAmount + monthlyAmountAfterPeriod - totalRent));
        if(netBenefitHouse>netBenefitRent)
            setAction("Buy")
        else
            setAction("Rent");
    }, [costOfProperty, registrationPercentage, downPaymentPercentage, interestRate, loanTenure, taxBracket, registrationAmount, downPaymentAmount, loanAmount, emi, effectiveInterestRate, effectiveEmiPerMonth, totalInterest, maintenancePercentage, maintenanceAmountPerMonth, avgYearlyIncreaseInPropertyPrice, totalMaintenanceCost, totalCostOfHouse, percentageIncrease, valueAfterPeriod, netBenefitHouse, monthlyRent, hraTaxBenefit, avgYearlyIncreaseInRent, effectiveMonthlyRent, yearlyRent, totalRent, additionalAmount, returnYouCanGenerate, valueOfUpFrontAmount, monthlyAmountAfterPeriod, netBenefitRent, duration])
    return(
        <>
            <h1>Buy Or Rent (React)</h1>
            <h1>In this case you should <span>{action}</span> a house</h1>
            <div>Analysis Period : <input type="number" value ={duration} onChange={e => setDuration(e.target.value)} /></div>
            <div className={housestyle.wrapper}>
                <div className={housestyle.rentColumn}>
                    <div>Renting a house - what are the financials?</div>
                    <div>Monthly Rent: <input type="number" value={monthlyRent} onChange={e => setMonthlyRent(e.target.value)} /></div>
                    <div>HRA Tax Benefit % : <input type="number" value={hraTaxBenefit} onChange={e => setHraTaxBenefit(e.target.value)} /></div>
                    <div>Yearly Increase in Rent % : <input type="number" value={avgYearlyIncreaseInRent} onChange={e => setAvgYearlyIncreaseInRent(e.target.value)} /></div>
                    <div>Effective Monthly Rent <div>{effectiveMonthlyRent.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Yearly Rent <div>{yearlyRent.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Total Rent <div>{totalRent.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>This is your expense. But you also gain if you invest the amount of downpayment and also</div>
                    <div>the additional interest you will pay beyond your monthly rent</div>
                    <div>So this should be added as a benefit to renting a house</div>
                    <div>Total upfront amount (incl registration) <div>{totalUpFrontCost.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Additional Amount <div>{additionalAmount.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div> Monthly Interest minus rent(which increse every year)</div>
                    <div>Return you can generate % : <input type="number" value={returnYouCanGenerate} onChange={e => setReturnYouCanGenerate(e.target.value)} /></div>
                    <div>Value of Upfront Amount <div>{valueOfUpFrontAmount.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Monthly Amount After Period <div>{monthlyAmountAfterPeriod.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Net Benefit <div>{netBenefitRent.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div>Negative Rent amount plus amount you earned</div>
                    <div>Negative number means you paid more than </div>
                </div>
                <div className={housestyle.buyingColumn}>
                    <div>Buying a house - what are the financials?</div>
                    <div>Cost of Property : <input type="number" value={costOfProperty} onChange={e => setCostOfProperty(parseInt(e.target.value))}/></div>
                    <div>Registration % : <input type="number" value={registrationPercentage} onChange={e => setRegistrationPercentage(e.target.value)}/>%</div>
                    <div>Registration Amount <div>{registrationAmount.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Downpayment % : <input type="number" value={downPaymentPercentage} onChange={e => setDownPaymentPercentage(e.target.value)}/>%</div>
                    <div>Downpayment Amount <div>{downPaymentAmount.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Total upfront amount (incl registration) <div>{totalUpFrontCost.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Loan Amount: <div>{loanAmount.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Interest Rate on Loan % : <input type="number" value={interestRate} onChange={e => setInterestRate(e.target.value)}/>%</div>
                    <div>Loan Duration in years : <input type="number" value={loanTenure} onChange={e => setLoanTenure(e.target.value)}/></div>
                    <div>EMI per month: <div>{emi.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Tax bracket : <input type="number" value={taxBracket} onChange={e => setTaxBracket(e.target.value)}/>%</div>
                    <div>Effective Interest Rate % <div>{effectiveInterestRate.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Effective EMI per month <div>{effectiveEmiPerMonth.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Total Interest Paid <div>{totalInterest.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Maintenance % : <input type="number" value={maintenancePercentage} onChange={e => setMaintenancePercentage(e.target.value)}/>%</div>
                    <div>Maintenance Amount <div>{maintenanceAmountPerMonth.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Average yearly increase in property price % : <input type="number" value={avgYearlyIncreaseInPropertyPrice} onChange={e => setAvgYearlyIncreaseInPropertyPrice(e.target.value)}/>%</div>
                    <div>Total Maintenance Cost <div>{totalMaintenanceCost.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Total Cost of House <div>{totalCostOfHouse.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>The value of the house increase as well every year</div>
                    <div>Percentage increase in value of the house % : <input type="number" value={percentageIncrease} onChange={e => setPercentageIncrease(e.target.value)}/>%</div>
                    <div>Value of the house after {duration} years <div>{valueAfterPeriod.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div></div>
                    <div>Net Benefit of buying the house <div>{netBenefitHouse.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</div>Value of property minus cost of property, after the period</div>
                    <div>Negatve value means, buying a house costs you more in this period</div>
                </div>
            </div>
        </>
    )
}


//html
{/* <div>Analysis Period: <input type="number" name="period" defaultValue={30} onChange={calculate}/>years</div>
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
               */}
//javascript
//effective monthly rent
// let monthlyRent = document.querySelector("input[name='monthlyRent']").value;
// let hraTaxBenefit = document.querySelector("input[name='hraTaxBenefit']").value;
// document.getElementById("effectivemonthlyRent").innerHTML = (monthlyRent * (1-hraTaxBenefit/100));
// //total rent
// let avgYearlyRentIncrease = document.querySelector("input[name=avgIncrease").value/100;
// let period = document.querySelector("input[name='period']").value;
// let effectiveMonthlyRent = monthlyRent * (1 - hraTaxBenefit/100);
// let yearlyRent = effectiveMonthlyRent * 12;

// let totalRent =0;
// for (let i = 0; i < period; i++) {  
//     totalRent += yearlyRent;
//     yearlyRent += yearlyRent * avgYearlyRentIncrease;
// }
// document.getElementById("totalrent").innerHTML=totalRent.toFixed(0);
// // additional amount you cann invest
// let effectiveEmiPerMonth = document.getElementById("effectiveEmiPerMonth").innerHTML;
// let additionalAmount = effectiveEmiPerMonth - effectiveMonthlyRent ;
// document.getElementById("additionalAmount").innerHTML = additionalAmount.toFixed(0);
// let returnYouCanGenerate = document.querySelector("input[name='returnYouCanGenerate']").value/100;
// let valueOfUpFrontAmount = totalUpFront * Math.pow((1 + returnYouCanGenerate), period) / Math.pow((1 ), period)
// document.getElementById("valueOfUpFrontAmount").innerHTML = valueOfUpFrontAmount.toFixed(0);
// let i = returnYouCanGenerate/12;
// let monthlyAmountAfterPeriod =parseInt((additionalAmount * ((Math.pow(1 + i, period * 12) - 1) / i) * (1 + i)).toFixed(0));
// document.getElementById("monthlyAmountAfterPeriod").innerHTML = monthlyAmountAfterPeriod;
// let netBenefitRenting = valueOfUpFrontAmount + monthlyAmountAfterPeriod - totalRent;
// document.getElementById("netBenefitRenting").innerHTML = netBenefitRenting.toFixed(0);
// if(netBenefitRenting > netBenefitHouse){
//     document.getElementById("BuyOrRent").innerHTML = "Rent";
// }else{
//     document.getElementById("BuyOrRent").innerHTML = "Buy";
// }   
