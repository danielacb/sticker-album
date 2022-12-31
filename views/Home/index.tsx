import { useEffect, useRef, useState } from "react";
import Loading from "../../components/Loading";
import NewStickerButton from "../../components/NewStickerButton";
import PlayerModal from "../../components/PlayerModal";
import Sticker from "../../components/Sticker";
import { useStickers } from "../../context";
import { Player } from "../../types";

import { Grid } from "./styles";

const HomePage = () => {
  const { players, collection, isLoading } = useStickers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player>();

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = (e: WheelEvent) => {
      if (gridRef.current) gridRef.current.scrollLeft += e.deltaY;
    };

    window.addEventListener("wheel", scroll);

    return () => window.removeEventListener("wheel", scroll);
  }, []);

  const handleClick = (player: Player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid ref={gridRef}>
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
        </Grid>
      )}
      <PlayerModal
        player={selectedPlayer}
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HomePage;
