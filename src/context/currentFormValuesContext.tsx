import { createContext, useState } from "react";

export const CurrentFormValuesContext = createContext<any | null>(null);

type CurrentFormValuesProps = {
  children: React.ReactNode
}

const initialStates = {
  name: "",
  email: "",
  phoneNumber: ""
}

export const CurrentFormValuesProvider = ({ children }: CurrentFormValuesProps) => {
  const [formValues, setFormValues] = useState<any>(initialStates);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const contextValues = { formValues, handleInputChange };

  return (
    <CurrentFormValuesContext.Provider value={contextValues}>
      { children }
    </CurrentFormValuesContext.Provider>
  )

}