import React, { useContext } from 'react';
import { PlanContext } from 'context/plansContext';

const PlanCard: React.FC<PlanCardProps> = ({ title, rate, icon, yearlyRate, showYearlyRate, isSelected, index }) => {

  const { setCurrentPlan } = useContext(PlanContext);

  return (
    <article onClick={() => setCurrentPlan(index)} className={`plan-card ${isSelected && "selected"}`}>
      <div className='plan-card-icon'>
        <img src={icon} alt="" />
      </div>
      <div className='plan-card-info'>
        <h3>{ title }</h3>
        <h4 style={{ marginTop: "6px" }}>{ showYearlyRate ? yearlyRate : rate }</h4>
        {showYearlyRate ?
          <h5 style={{ color: "hsl(213, 96%, 18%)", fontSize: "16px", marginTop: "6px" }}>
            2 Months Free
          </h5> : null}
      </div>
    </article>
  )
}

export default PlanCard