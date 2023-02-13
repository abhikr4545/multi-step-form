interface CurrentStepperProps {
  stepNumber: string,
  isActive: boolean,
  title: string
}

interface PlanCardProps {
  title: string,
  rate: string,
  icon: string,
  yearlyRate: string,
  showYearlyRate: boolean,
  isSelected: boolean,
  index: number
}

interface UserFormDataProps {
  formValues: object,
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface AddOnsProps {
  title: string,
  subtitle: string,
  checked: boolean,
  monthlyRate: number,
  yearlyRate: number,
  index: number
}