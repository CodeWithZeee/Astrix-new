"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const LoadingContext = createContext({ isLoadingComplete: true });

export const LoadingProvider = ({ children }) => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    // Simulate a short loading period; replace with your real loading logic if needed
    const t = setTimeout(() => setIsLoadingComplete(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoadingComplete }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);

export default LoadingContext;
