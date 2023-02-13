import { useContext } from "react";
import { CurrentPageContext } from "context/currentFormPageContext";
import CurrentStepperPosition from "./CurrentStepperPosition"

const StepperContainer = () => {
  const values = useContext(CurrentPageContext);
  const steppers = [
    { id: 1, stepNumber: '1', isActive: values.currentPage === 0, title: "YOUR INFO" },
    { id: 2, stepNumber: '2', isActive: values.currentPage === 1, title: "SELECT PLAN" },
    { id: 3, stepNumber: '3', isActive: values.currentPage === 2, title: "ADD-ONS" },
    { id: 4, stepNumber: '4', isActive: values.currentPage === 3, title: "SUMMARY" },
  ]

  return (
    <div className="stepper-container">
      {
        steppers.map((step) => (
          <CurrentStepperPosition key={step.id} stepNumber={step.stepNumber} isActive={step.isActive} title={step.title} />
        ))
      }
    </div>
  )
}

export default StepperContainer