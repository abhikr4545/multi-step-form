import React, { useContext } from 'react';
import { CurrentPageContext } from 'context/currentFormPageContext';
import GoBack from './GoBack'
import NextButton from './NextButton'

const DesktopNavigation = () => {

  const { currentPage } = useContext(CurrentPageContext);

  return (
    <>
      {
        (currentPage < 4) ? 
          <div className='desktop-navigation'>
            <GoBack />
            <NextButton />
          </div>
          : null
      }
    </>
  )
}

export default DesktopNavigation