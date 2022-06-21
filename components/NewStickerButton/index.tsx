import { useStickers } from "../../context";
import styles from "./styles.module.scss";

const NewStickerButton = () => {
  const { collection, players, updateCollection } = useStickers();

  const random = () => players[Math.floor(Math.random() * players.length)];

  const getRandomPlayer = async () => {
    let newPlayer = random();

    if (collection.length < players.length) {
      while (collection.includes(newPlayer.id)) {
        newPlayer = random();
      }
    }

    updateCollection(newPlayer.id);
  };

  return (
    <button
      className={styles.newStickerButton}
      onClick={() => getRandomPlayer()}
    >
      Open new Sticker
    </button>
  );
};

export default NewStickerButton;
