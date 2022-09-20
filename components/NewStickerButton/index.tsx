import { useStickers } from "../../context";
import { Player } from "../../types";

import { Wrapper } from "./styles";

type Props = {
  handleNewSticker: (player: Player) => void;
};

const NewStickerButton = ({ handleNewSticker }: Props) => {
  const { collection, players, updateCollection } = useStickers();

  const random = () => players[Math.floor(Math.random() * players.length)];

  const getRandomPlayer = async () => {
    let newPlayer = random();

    if (collection.length < players.length) {
      while (collection.includes(newPlayer.id)) {
        newPlayer = random();
      }
    }

    handleNewSticker(newPlayer);
    updateCollection(newPlayer.id);
  };

  return (
    <Wrapper>
      <button onClick={() => getRandomPlayer()}>Open new Sticker</button>
    </Wrapper>
  );
};

export default NewStickerButton;
