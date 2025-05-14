"use client";

import React, { createContext, useContext } from "react";

// Define the context data shape with JS comments for clarity
const TypographyContext = createContext({
  fontName: "",
  fontFamily: "",
  description: "",
  alphabet: {
    uppercase: "",
    lowercase: "",
    numbers: "",
  },

  colors: [],
});

// Create a provider component
export const TypographyProvider = ({ children, value }) => {
  return (
    <TypographyContext.Provider value={value}>
      {children}
    </TypographyContext.Provider>
  );
};

// Create a custom hook to use the context
export const useTypography = () => {
  const context = useContext(TypographyContext);
  if (!context) {
    throw new Error("useTypography must be used within a TypographyProvider");
  }
  return context;
};
