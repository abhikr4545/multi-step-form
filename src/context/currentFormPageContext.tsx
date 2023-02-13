import { createContext, useState } from "react";

export const CurrentPageContext = createContext<any | null>(null);

type CurrentPageProviderProps = {
  children: React.ReactNode
}

export const CurrentPageProvider = ({ children }: CurrentPageProviderProps) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const nextPage = () => {
    if (currentPage === 4) return;

    setCurrentPage((currentState) => {
      return currentState + 1
    });
  }

  const previousPage = () => {
    if (currentPage === 0) return;
    
    setCurrentPage(currentPage - 1);
  }
// eslint-disable-next-line
  const contextValues = { currentPage, nextPage, previousPage };

  return (
    <CurrentPageContext.Provider value={contextValues}>
      {children}
    </CurrentPageContext.Provider>
  )
}