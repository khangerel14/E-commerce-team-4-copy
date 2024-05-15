import React, { createContext, useRef } from "react";

export const AdminContext = createContext({});
export const AdminContextProvider = ({ children }: any) => {
  const formDataRef = useRef({
    shopInformation: "",
    city: "",
    district: "",
    khoroo: "",
    exprience: "",
    product: "",
  });
  return (
    <AdminContext.Provider value={{ formDataRef }}>
      {children}
    </AdminContext.Provider>
  );
};
