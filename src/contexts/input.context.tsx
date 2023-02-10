import React, { createContext, ReactNode, useState } from "react";
import { FC } from "react";

type InputContextProps = {
  searchInput: string;
  setSearchInput: (input: string) => void;
};

export const InputContext = createContext<InputContextProps>({
  searchInput: "aww",
  setSearchInput: () => null,
});

type InputProviderProps = {
  children: ReactNode;
};

export const InputProvider: FC<InputProviderProps> = ({ children }) => {
  const [searchInput, setSearchInput] = useState("aww");
  const value = { searchInput, setSearchInput };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
