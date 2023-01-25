import React, { useState, useEffect } from "react";
import sip from '../styles/InvestmentCalculator.module.css';
import { Slider } from "@mui/material";
import { PieChart } from 'react-minimal-pie-chart';
export default function InvestmentCalculator() {
  const [duration, setDuration] = useState([20, 60]);
  const [monthlyContribution, setMonthlyContribution] = useState(5000);
  const [interestRate, setInterestRate] = useState(9);
  const [inflation, setInflation] = useState(6);
  const [output, setOutput] = useState(0);
  const [returns, setReturns] = useState(0);
  const [inflationAdjustedValue, setInflationAdjustedValue] = useState(0);
  const [totalInvestment, setTotalInvesment] = useState(0);
  useEffect(() => {
    let i = interestRate / 100 / 12;
    let n = duration[1] - duration[0];
    setTotalInvesment(parseFloat(monthlyContribution * n * 12));
    let i2 = ((1 + interestRate / 100) / (1 + inflation / 100) - 1) / 12;
    if(i == 0){
        setOutput(parseFloat(monthlyContribution * n * 12));
        setReturns(parseInt(0));
    }else{
        setOutput(
            parseFloat(monthlyContribution * ((Math.pow(1 + i, n * 12) - 1) / i) * (1 + i))
        );
    }
    if(i2 == 0){
        setInflationAdjustedValue(parseFloat(monthlyContribution * n * 12));
    }else{
        setInflationAdjustedValue(
            parseFloat(monthlyContribution * ((Math.pow(1 + i2, n * 12) - 1) / i2) * (1 + i2))
        );
    }
    setReturns(parseFloat(monthlyContribution * ((Math.pow(1 + i, n * 12) - 1) / i) * (1 + i) - monthlyContribution * n * 12));
  }, [duration, monthlyContribution, interestRate, inflation,returns]);

  return (
    <>
      <h1>Investment Calculator</h1>
      <p>
        Enter your investment amount and the interest rate to see how much you
        will earn in interest.
      </p>
    <div className={sip.wrapper}>
      <form className={sip.form}>
        <div>Total Duration <input
            type="number"
            value={duration[1] - duration[0]}
            onChange={(e) => setDuration(e.target.value)}
          /></div>
        <Slider
          getAriaLabel={() => "Time Period"}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          valueLabelDisplay="auto"
          disableSwap
        />
        <div className={sip.detail}><span>Current age</span><span>Retirement Age</span></div>
        <div>
          Monthly Contribution{" "}
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
          />
        </div>
        <Slider
          value={monthlyContribution}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={(e) => setMonthlyContribution(e.target.value)}
          min={500}
          max={100000}
          step={500}
        />
        <div className={sip.detail}><span>500</span><span>100000</span></div>
        <div>Interest Rate 
        <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}            
          />
        </div>
        <Slider
          value={interestRate}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <div>Inflation
        <input
          type="number"
          value={inflation}
          onChange={(e) => setInflation(e.target.value)}
        />
        </div>
        <Slider
          value={inflation}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={(e) => setInflation(e.target.value)}
          min={0}
          max={15}
        />
      </form>
      <div className={sip.pie}>

      <PieChart
        data={[
            { title: 'totalInvestment', value: totalInvestment, color: '#E38627' },
            { title: 'returns', value: returns, color: '#C13C37' },
        ]}
        startAngle={270}
        lineWidth={50}
        radius={30}
        />
        
      </div>
      Not Inflation Adjusted
      </div>
      <div>
        Total Investment:{" "}
        <div>
          {totalInvestment.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </div>
      </div>
      <div>Returns: <div>{returns.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}</div></div>
      <div>
        Total value:{" "}
        <div id="output">
          {output.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </div>
      </div>
      <div>
        Inflation adjusted value:{" "}
        <div id="output2">
          {inflationAdjustedValue.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </div>
      </div>
    </>
  );
}
