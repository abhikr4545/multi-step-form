import { useContext } from 'react';
import { CurrentPageContext } from 'context/currentFormPageContext';

const GoBack = () => {
  const { previousPage, currentPage } = useContext(CurrentPageContext);

  const handleClick = () => {
    previousPage()
  }

  return (
    <article className='go-back' onClick={handleClick}>
      {currentPage !== 0 ? <>Go Back</> : null}
    </article>
  )
}

export default GoBack