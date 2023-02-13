import { useContext } from 'react';
import { PlanContext } from 'context/plansContext';

const ToggleSubscription = () => {
  const { isYearlySubscription, setIsYearlySubscription } = useContext(PlanContext);
  
  const handleClick = () => {
    setIsYearlySubscription(!isYearlySubscription)
  }

  return (
    <section className='toggle-container'>
      <h3>Monthly</h3>
      <div onClick={handleClick} className='toggle'>
        <div className={`toggle-ball ${isYearlySubscription ? "switch" : ""}`} />
      </div>
      <h3>Yearly</h3>
    </section>
  )
}

export default ToggleSubscription