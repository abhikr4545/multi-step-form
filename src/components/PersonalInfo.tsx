import { useContext } from "react";
import { CurrentFormValuesContext } from "context/currentFormValuesContext";
import { ErrorContext } from "context/errorContext";

const PersonalInfo = () => {

  const { formValues, handleInputChange } = useContext(CurrentFormValuesContext);
  const { nameError, emailError, phoneNumberError, validEmail, validPhoneNumber } = useContext(ErrorContext);
  
  return (
    <div className='personal-info'>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form className='personal-info-label-container'>
        <label>
          <div className="label-container">
            <div>Name</div>
            <div className={`${nameError ? "active" : ""} error`}>This field is required</div>
          </div>
          <input name="name" className={`input-field ${nameError ? "input-error" : ""}`} type="text" onChange={handleInputChange} value={formValues?.name} id="input" placeholder='e.g. Stephen King' />
        </label>
        <label>
          <div className="label-container">
            <div>Email Address</div>
            <div className={`${emailError || validEmail ? "active" : ""} error`}>
              { validEmail ? "Email format not correct" : "This field is required" }
            </div>
          </div>
          <input name="email" className={`input-field ${emailError ? "input-error" : ""}`} type="text" onChange={handleInputChange} value={formValues?.email} id="input" placeholder='e.g. stephenking@lorem.com' />
        </label>
        <label>
          <div className="label-container">
            <div>Phone Number</div>
            <div className={`${phoneNumberError || validPhoneNumber ? "active" : ""} error`}>
              { validPhoneNumber ? "Numeric value only" : "This field is required" }
            </div>
          </div>
          <input name="phoneNumber" className={`input-field ${phoneNumberError ? "input-error" : ""}`} type="text" onChange={handleInputChange} value={formValues?.phoneNumber} id="input" placeholder='e.g. + 1 234 567 890' />
        </label>
      </form>
    </div>
  )
}

export default PersonalInfo