import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { User } from "../types";

type ContextData = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

const ContextDefaultValues = {
  user: null,
  setUser: () => null,
};

type ProviderProps = {
  children: React.ReactNode;
};

const Context = createContext<ContextData>(ContextDefaultValues);

export const StickersProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStickers = () => useContext(Context);
