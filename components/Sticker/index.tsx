import Image from "next/image";
import { Player } from "../../types";
import styles from "./styles.module.scss";

type Props = {
  player: Player;
  active: boolean;
};

const Sticker = ({ player, active }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {active && (
          <div className={styles.imageContainer}>
            <Image
              src={player.picture_url}
              alt={player.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className={styles.playerName}>
          {active ? <span>{player.name}</span> : <h3>{player.name}</h3>}
        </div>
        <div className={styles.playerNumber}>{player.number}</div>
      </div>
    </div>
  );
};

export default Sticker;
