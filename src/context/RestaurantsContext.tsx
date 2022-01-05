import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext({});

export const RestaurantsContextProvider = (props: any) => {
  const [resturants, setResturants] = useState([]);

  return (
    <RestaurantsContext.Provider
      value={{
        resturants,
        setResturants,
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
