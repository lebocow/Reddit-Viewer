import { createContext, useState } from "react";

export const InputContext = createContext({
  searchInput: "aww",
  setSearchInput: () => null,
});

export const InputProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("aww");
  const value = { searchInput, setSearchInput };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
