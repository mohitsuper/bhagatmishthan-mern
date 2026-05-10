import { createContext, useState } from "react";

export const FavouriteContext = createContext();

export function FavouriteProvider({ children }) {
  const [favisOpen, setFavIsOpen] = useState(false);
  const [favouriteData, setFavouriteData] = useState([]);

  return (
    <FavouriteContext.Provider
      value={{
        favisOpen,
        setFavIsOpen,
        favouriteData,
        setFavouriteData,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}