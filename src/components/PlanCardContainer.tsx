import { useContext } from "react";
import { PlanContext } from 'context/plansContext';
import PlanCard from './PlanCard';

const PlanCardContainer = () => {
  const { currentPlan, planCardData, isYearlySubscription } = useContext(PlanContext);

  const getSelectedValue = (index: number): boolean => {
    if (index === currentPlan) {
      return true;
    }

    return false;
  } 

  return (
    <section className='plan-card-container'>
      {
        planCardData.map((item: any, index: number) => (
          <PlanCard
            key={item.id} title={item.title} rate={item.rate} icon={item.icon} yearlyRate={item.yearlyRate}
            showYearlyRate={isYearlySubscription} isSelected={getSelectedValue(index)} index={index}
          />
        ))
      }
    </section>
  )
}

export default PlanCardContainer