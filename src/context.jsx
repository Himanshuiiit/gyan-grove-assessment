import React, { createContext, useContext } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
const context = createContext();
const ContextProvider = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 992px)");
  return <context.Provider value={{ isMobile }}>{children}</context.Provider>;
};

export default ContextProvider;

export const GetContext = () => {
  return useContext(context);
};
