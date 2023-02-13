import { createContext, useState } from "react";

export const ErrorContext = createContext<any | null>(null);

type ErrorContextProps = {
  children: React.ReactNode
}

export const ErrorProvider = ({ children }: ErrorContextProps) => {
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validPhoneNumber, setValidPhoneNumber] = useState<boolean>(false);
  const [planSelectionError, setPlanSelectionError] = useState<boolean>(false);

  const handleNameError = () => {
    setNameError(true);

    setTimeout(() => {
      setNameError(false)
    }, 2000)
  }

  const handleEmailError = () => {
    setEmailError(true);

    setTimeout(() => {
      setEmailError(false);
    }, 2000)
  }

  const handlePhoneNumberError = () => {
    setPhoneNumberError(true);

    setTimeout(() => {
      setPhoneNumberError(false);
    }, 2000)
  }

  const handleValidEmailError = () => {
    setValidEmail(true);

    setTimeout(() => {
      setValidEmail(false);
    }, 2000)
  }

  const handleValidPhoneNumberError = () => {
    setValidPhoneNumber(true);

    setTimeout(() => {
      setValidPhoneNumber(false);
    }, 2000)
  }

  const handlePlanSelectionError = () => {
    setPlanSelectionError(true);

    setTimeout(() => {
      setPlanSelectionError(false);
    }, 2000)
  }

  const contextValues = {
    nameError, handleNameError,
    emailError, handleEmailError,
    phoneNumberError, handlePhoneNumberError,
    validEmail, handleValidEmailError,
    validPhoneNumber, handleValidPhoneNumberError,
    planSelectionError, handlePlanSelectionError
  }

  return (
    <ErrorContext.Provider value={contextValues}>
      { children }
    </ErrorContext.Provider>
  )

}
