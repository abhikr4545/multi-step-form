import React, { useContext } from 'react';
import { AddOnsContext } from 'context/addonsContext';
import { PlanContext } from 'context/plansContext';
import RateBreakup from './RateBreakup';

const Summary = () => {

  const { currentPlan, planCardData, isYearlySubscription } = useContext(PlanContext);

  const { data } = useContext(AddOnsContext);

  const getPlanRate = (currentPlan: number): string => {
    const rate = isYearlySubscription ? planCardData[currentPlan]?.yearlyRate?.split("/")[0] : planCardData[currentPlan]?.rate?.split("/")[0];
    return rate;
  }

  const getTotalRate = (): number => {
    const planRate: number = parseInt(getPlanRate(currentPlan).slice(1));
    let addOnTotal: number = 0;
      data?.forEach((item: any) => {
      if (item.checked) {
        addOnTotal += isYearlySubscription ? item.yearlyRate : item.monthlyRate
      }
    });
    return planRate + addOnTotal;
  }
  
  return (
    <section className='summary'>
      <h1>Finishing up</h1>
      <p>Double check everything looks OK before confirming.</p>
      <RateBreakup />
      <div className="total-rate">
        <h4>Total{`${isYearlySubscription ? "(per year)" : "(per month)"}`}</h4>
        <h4>{`$${getTotalRate()}/${isYearlySubscription ? "yr" : "mo"}`}</h4>
      </div>
    </section>
  )
}

export default Summary