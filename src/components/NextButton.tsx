import { useContext } from 'react';
import { CurrentPageContext } from 'context/currentFormPageContext';
import { CurrentFormValuesContext } from 'context/currentFormValuesContext';
import { ErrorContext } from 'context/errorContext';
import { PlanContext } from 'context/plansContext';

const NextButton = () => {

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneNumberRegex = /^[0-9]+$/;

  const { currentPage, nextPage } = useContext(CurrentPageContext);
  const { currentPlan } = useContext(PlanContext);

  const { formValues } = useContext(CurrentFormValuesContext);
  const { handleNameError, handleEmailError, handlePhoneNumberError, handleValidEmailError, handleValidPhoneNumberError, handlePlanSelectionError } = useContext(ErrorContext);

  const handleClick = () => {

    if (!formValues.name) {
      handleNameError()
      return;
    }

    if (!formValues.email) {
      handleEmailError()
      return;
    }

    if (!formValues.email.match(emailRegex)) {
      handleValidEmailError();
      return;
    }

    if (!formValues.phoneNumber) {
      handlePhoneNumberError()
      return;
    }

    if (!formValues.phoneNumber.match(phoneNumberRegex)) {
      handleValidPhoneNumberError();
      return;
    }

    if (currentPage === 1) {
      if (currentPlan === null) {
        handlePlanSelectionError()
        return;
      }
    }

    nextPage();
  }

  return (
    <article className='next-button' style={currentPage === 3 ? { backgroundColor: "hsl(243, 100%, 62%)"} : {}} onClick={handleClick}>
      { currentPage !== 3 ? "Next Step" : "Confirm"}
    </article>
  )
}

export default NextButton