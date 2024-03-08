import React, { createContext, useEffect, useState } from "react";
export const ContextProvider = createContext();

const Providers = ContextProvider.Provider;
const Context = ({ children }) => {
  return <Providers value={{}}>{children}</Providers>;
};

export default Context;
