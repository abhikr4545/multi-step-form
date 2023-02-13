import { createContext, useState } from "react";

export const AddOnsContext = createContext<any | null>(null);

type AddOnsProps = {
  children: React.ReactNode
}

const addOnsData = [
  { id: 1, title: "Online Service", subtitle: "Access to multiplayer games", checked: false, monthlyRate: 1, yearlyRate: 10  },
  { id: 2, title: "Larger storage", subtitle: "Extra 1 TB of cloud save", checked: false, monthlyRate: 2, yearlyRate: 20  },
  { id: 3, title: "Customizable Profile", subtitle: "Custom theme on your profile", checked: false, monthlyRate: 2, yearlyRate: 20  },
]

export const AddOnsProvider = ({ children }: AddOnsProps) => {

  const [data, setData] = useState<any>(addOnsData);

  const handleOnChange = (position: number) => {
    const newList = addOnsData.map((item, index) => {
      if (index === position) {
        item.checked = !(item.checked);
      }

      return item;
    })
    setData(newList);
  }

  const contextValues = { data, handleOnChange };

  return (
    <AddOnsContext.Provider value={contextValues}>
      { children }
    </AddOnsContext.Provider>
  )
}