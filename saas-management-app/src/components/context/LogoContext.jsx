// src/context/LogoContext.js
import React, { createContext, useState, useContext } from 'react';

const LogoContext = createContext();

export const LogoProvider = ({ children }) => {
  const [logo, setLogo] = useState(() => {
    const savedLogo = localStorage.getItem('companyLogo');
    return savedLogo ? JSON.parse(savedLogo) : '';
  });

  return (
    <LogoContext.Provider value={{ logo, setLogo }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = () => useContext(LogoContext);