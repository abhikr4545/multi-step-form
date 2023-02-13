import { useContext } from 'react';
import { PlanContext } from 'context/plansContext';
import { AddOnsContext } from 'context/addonsContext';

const AddOnsCard: React.FC<AddOnsProps> = ({ title, subtitle, checked, monthlyRate, yearlyRate, index }) => {

  const { isYearlySubscription } = useContext(PlanContext);
  const { data, handleOnChange } = useContext(AddOnsContext);
  
  return (
    <article className={`add-on-card ${data[index].checked ? "selected-add-on" : ""}`}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className='add-on-card-checkbox'>
          <input onChange={() => handleOnChange(index)} checked={checked} type="checkbox" name="" id="" />
        </div>
        <div className='add-on-card-info'>
          <h3>{ title }</h3>
          <h4>{ subtitle }</h4>
        </div>
      </div>
      <div className='add-on-card-subscription'>
        { isYearlySubscription ? `+$${yearlyRate}/yr` : `+$${monthlyRate}/mo` }
      </div>
    </article>
  )
}

export default AddOnsCard