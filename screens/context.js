import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [estoque, setEstoque] = useState([]);
  const [financas, setFinancas] = useState({ gastos: 0, lucros: 0 });

  return (
    <AppContext.Provider value={{ estoque, setEstoque, financas, setFinancas }}>
      {children}
    </AppContext.Provider>
  );
};