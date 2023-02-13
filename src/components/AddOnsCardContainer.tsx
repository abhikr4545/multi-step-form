import { useContext } from 'react';
import AddOnsCard from './AddOnsCard';

import { AddOnsContext } from 'context/addonsContext';

const AddOnsCardContainer = () => {

  const { data } = useContext(AddOnsContext);  

  return (
    <div className='add-on-cards-container'>
      {
        data.map((item: any, index: number) => (
          <AddOnsCard key={item.id} title={item.title} subtitle={item.subtitle} checked={item.checked} monthlyRate={item.monthlyRate} yearlyRate={item.yearlyRate} index={index} />
        ))
      }
    </div>
  )
}

export default AddOnsCardContainer