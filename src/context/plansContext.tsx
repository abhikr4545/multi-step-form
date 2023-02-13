import { createContext, useState } from "react";
import Arcade from "assets/icon-arcade.svg";
import Advanced from "assets/icon-advanced.svg";
import Pro from "assets/icon-pro.svg";

export const PlanContext = createContext<any | null>(null);

type PlanProviderProps = {
  children: React.ReactNode
}

const planCardData = [
  { id: 1, title: "Arcade", rate: "$9/mo", icon: Arcade, yearlyRate: "$90/yr" },
  { id: 2, title: "Advanced", rate: "$12/mo", icon: Advanced, yearlyRate: "$120/yr" },
  { id: 3, title: "Pro", rate: "$15/mo", icon: Pro, yearlyRate: "$150/yr" },
]

export const PlanProvider = ({ children }: PlanProviderProps) => {
  const [currentPlan, setCurrentPlan] = useState<number | null>(null);
  const [isYearlySubscription, setIsYearlySubscription] = useState<boolean>(false);

  const contextValues = {
    currentPlan, planCardData, setCurrentPlan, isYearlySubscription, setIsYearlySubscription
  }

  return (
    <PlanContext.Provider value={contextValues}>
      {children}
    </PlanContext.Provider>
  )
}