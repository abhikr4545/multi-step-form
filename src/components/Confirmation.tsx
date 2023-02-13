import React from 'react';
import thanks from "assets/icon-thank-you.svg";

const Confirmation = () => {
  return (
    <section className='confirmation'>
      <div className='image-container'>
        <img src={thanks} />
      </div>
      <div className='confirmation-info'>
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun 
          using our platform. If you ever need support, please feel free 
          to email us at support@loremgaming.com.
        </p>
      </div>
    </section>
  )
}

export default Confirmation