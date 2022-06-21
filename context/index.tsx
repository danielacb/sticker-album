import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Player, User } from "../types";
import { supabase } from "../utils/supabaseClient";

type ContextData = {
  user: User | null;
  players: Player[];
  collection: string[];
  isLoading: boolean;
  setUser: Dispatch<SetStateAction<User | null>>;
  updateCollection: (playerId: string) => void;
};

const ContextDefaultValues = {
  user: null,
  players: [],
  collection: [],
  isLoading: true,
  setUser: () => null,
  updateCollection: () => null,
};

type ProviderProps = {
  children: React.ReactNode;
};

const Context = createContext<ContextData>(ContextDefaultValues);

export const StickersProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [collection, setCollection] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCollection([]);

    const getPlayers = async () => {
      try {
        const { data, error } = await supabase
          .from("players")
          .select("*")
          .order("team_id");

        if (error) {
          throw error;
        }

        setPlayers(data);
      } catch (error: any) {
        console.log("Error getting the players: ", error.message);
      }
    };

    const getCollection = async () => {
      try {
        const { data, error } = await supabase
          .from("users")
          .select("stickers")
          .eq("id", user?.id);

        if (error) {
          throw error;
        }

        setCollection(data[0].stickers || []);
      } catch (error: any) {
        console.log("Error getting the collection: ", error.message);
      }
    };

    getPlayers();
    user?.id && getCollection();
    setIsLoading(false);
  }, [user?.id]);

  const updateCollection = async (playerId: string) => {
    const { data } = await supabase
      .from("users")
      .update({ stickers: [...collection, playerId] })
      .eq("id", user?.id);

    data && setCollection(data[0].stickers);
  };

  return (
    <Context.Provider
      value={{
        user,
        players,
        collection,
        isLoading: !user || isLoading,
        setUser,
        updateCollection,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStickers = () => useContext(Context);
