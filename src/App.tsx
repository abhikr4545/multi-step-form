import FormStepperMobile from "./components/FormStepperMobile";
import FormContainer from "./components/FormContainer";
import MobileNavigation from "components/MobileNavigation";

const App = () => {
  return (
    <div className="app">
      <FormStepperMobile />
      <FormContainer />
      <MobileNavigation />
    </div>
  )
}

export default App;