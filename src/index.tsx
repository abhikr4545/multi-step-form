import React from 'react';
import ReactDOM from 'react-dom/client';

import { CurrentPageProvider } from 'context/currentFormPageContext';
import { CurrentFormValuesProvider } from 'context/currentFormValuesContext';
import { PlanProvider } from 'context/plansContext';
import { ErrorProvider } from 'context/errorContext';
import { AddOnsProvider } from 'context/addonsContext';

import App from './App';
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CurrentPageProvider>
      <PlanProvider>
        <CurrentFormValuesProvider>
          <ErrorProvider>
            <AddOnsProvider>
              <App />
            </AddOnsProvider>
          </ErrorProvider>
        </CurrentFormValuesProvider>
      </PlanProvider>
    </CurrentPageProvider>
  </React.StrictMode>
);

