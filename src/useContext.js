import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const UserProvider = ({ children }) => {

    var address = "localhost:8080"
   
    return (
      <MyContext.Provider
        value={{
          address
        }}
      >
        {children}
      </MyContext.Provider>
    );
  };