import { useContext } from 'react';
import { PlanContext } from 'context/plansContext';
import { AddOnsContext } from 'context/addonsContext';

const RateBreakup = () => {

  const { currentPlan, planCardData, isYearlySubscription, setIsYearlySubscription } = useContext(PlanContext);

  const { data } = useContext(AddOnsContext);  

  const getPlanRate = (currentPlan: number): string => {
    const rate = isYearlySubscription ? planCardData[currentPlan].yearlyRate.split("/")[0] : planCardData[currentPlan].rate.split("/")[0];
    return rate;
  }

  return (
    <article className='rate-breakup'>
      <div className='rate-description'>
        <div className='single-rate'>
          <div className='rate-info'>
            <h4>
              {planCardData[currentPlan].title}{` (${isYearlySubscription ? "Yearly" : "Monthly"})`}
            </h4>
            <div onClick={() => setIsYearlySubscription(!isYearlySubscription)} className='subscription-change'>
              Change
            </div>
          </div>
          <div className='rate'>
            <h4>
              {getPlanRate(currentPlan)}{isYearlySubscription ? "/yr" : "/mo"}
            </h4>
          </div>
        </div>
        <div className='divider'></div>
        <div className='add-ons-price'>
          {
            data.map((item: any) => {
              if (item.checked) {
                return <div className='add-ons-info' key={item.id}>
                <h4>{item.title}</h4>
                <h4>{isYearlySubscription ? `$${item.yearlyRate}/yr` : `$${item.monthlyRate}/mo`}</h4>
              </div>
              }
            })
          }
        </div>
      </div>
    </article>
  )
}

export default RateBreakup