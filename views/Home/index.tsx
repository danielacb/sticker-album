import NewStickerButton from "../../components/NewStickerButton";
import Sticker from "../../components/Sticker";
import { useStickers } from "../../context";
import styles from "./styles.module.scss";

const HomePage = () => {
  const { players, collection, isLoading } = useStickers();

  return (
    <div className={styles.grid}>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <>
          {collection.length < players.length && <NewStickerButton />}
          {players.map((player) => (
            <Sticker
              key={player.id}
              player={player}
              active={collection.includes(player.id) || false}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default HomePage;
