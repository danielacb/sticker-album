import { useState } from "react";
import Loading from "../../components/Loading";
import NewStickerButton from "../../components/NewStickerButton";
import PlayerModal from "../../components/PlayerModal";
import Sticker from "../../components/Sticker";
import { useStickers } from "../../context";
import { Player } from "../../types";
import styles from "./styles.module.scss";

const HomePage = () => {
  const { players, collection, isLoading } = useStickers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player>();

  const handleClick = (player: Player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={styles.grid}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {collection.length < players.length && (
              <NewStickerButton handleNewSticker={handleClick} />
            )}
            {players.map((player) => (
              <Sticker
                key={player.id}
                player={player}
                active={collection.includes(player.id) || false}
                onClick={() => handleClick(player)}
              />
            ))}
          </>
        )}
      </div>
      <PlayerModal
        player={selectedPlayer}
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HomePage;
