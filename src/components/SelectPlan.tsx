import React, { useContext } from 'react';
import { ErrorContext } from 'context/errorContext';
import PlanCardContainer from './PlanCardContainer'
import ToggleSubscription from './ToggleSubscription';

const SelectPlan = () => {

  const { planSelectionError } = useContext(ErrorContext);

  return (
    <section className="select-plan">
      <h1>Select Your Plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <h4>{ planSelectionError ? "Select a plan" : "" }</h4>
      <PlanCardContainer />
      <ToggleSubscription />
    </section>
  )
}

export default SelectPlan