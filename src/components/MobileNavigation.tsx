import { useContext } from 'react'
import { CurrentPageContext } from 'context/currentFormPageContext';
import GoBack from './GoBack'
import NextButton from './NextButton'

const MobileNavigation = () => {

  const { currentPage } = useContext(CurrentPageContext);
  
  return (
    <>
      {
        (currentPage < 4) ? 
          <div className='mobile-navigation'>
            <GoBack />
            <NextButton />
          </div>
          : null
      }
    </>
  )
}

export default MobileNavigation