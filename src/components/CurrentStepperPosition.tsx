const CurrentStepperPosition: React.FC<CurrentStepperProps> = ({ stepNumber, isActive, title }) => {
  return (
    <div className="current-stepper-position">
      <div className={`current-step ${isActive ? "current" : ""}`}>
        {stepNumber}
      </div>
      <div className="current-step-info">
        <div>{`STEP ${stepNumber}`}</div>
        <div>{title}</div>
      </div>
    </div>
  )
}

export default CurrentStepperPosition