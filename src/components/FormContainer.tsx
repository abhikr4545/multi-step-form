import { useContext } from "react";
import { CurrentPageContext } from "context/currentFormPageContext";
import DesktopNavigation from "./DesktopNavigation";
import FormStepperDesktop from "./FormStepperDesktop";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Confirmation from "./Confirmation";

const FormContainer = () => {

  const { currentPage } = useContext(CurrentPageContext);

  const getSection = (page: number) => {
    switch (page) {
      case 0:
        return <PersonalInfo />
      case 1:
        return <SelectPlan />
      case 2:
        return <AddOns />
      case 3:
        return <Summary />
      case 4: 
        return <Confirmation />
      default:
        return null
    }
  }

  return (
    <section className='form-container'>
      <FormStepperDesktop />
      {getSection(currentPage)}
      <DesktopNavigation />
    </section>
  )
}

export default FormContainer