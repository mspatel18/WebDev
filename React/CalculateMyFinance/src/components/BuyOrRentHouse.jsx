import React from "react";
import '../styles/BuyOrRentHouse.module.css'
function effectivemonthlyrent(){
    let monthlyrent = document.querySelector("input[name='monthlyrent']").value;
    let hrataxbenefit = document.querySelector("input[name='hrataxbenefit']").value;
    document.getElementById("effectivemonthlyrent").innerHTML = (monthlyrent * (1-hrataxbenefit/100)).toFixed(0);
}
// //
// function calculateRent(monthlyRent, hraTaxBenefit, avgYearlyRentIncrease) {
//     let effectiveMonthlyRent = monthlyRent * (1 - hraTaxBenefit);
//     let yearlyRent = effectiveMonthlyRent * 12;

//     let totalRent = 0;
//     for (let i = 0; i < 30; i++) {  
//         totalRent += yearlyRent;
//         yearlyRent += yearlyRent * avgYearlyRentIncrease;
//     }
//     return totalRent;
// }
// console.log(calculateRent(15000, 0.2, 0.1))
export default function BuyOrRentHouse() {
    return(
        <>
            <h1>Buy or Rent House</h1>
            <div>Analysis Period: <input type="number" />years</div>
            <div>Financial for Renting a house</div>
            <div>Monthly Rent: <input type="number" name="monthlyrent"/></div>
            <div>HRA Tax Benefit: <input type="number" name="hrataxbenefit"/>%</div>
            <div>Avg Yearly Increase: <input type="number" />%</div>
            <div>Effective Monthly Rent: <div id="effectivemonthlyrent"></div></div>
            <button onClick={effectivemonthlyrent}>Calculate effective monthly rent</button>
        </>
    )
}