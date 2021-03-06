import Image from "next/image";
import { Player } from "../../types";
import styles from "./styles.module.scss";

type Props = {
  player: Player;
  active: boolean;
  onClick?: () => void;
};

const Sticker = ({ player, active, onClick }: Props) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      <div className={styles.card}>
        {active && (
          <div className={styles.imageContainer}>
            <Image
              src={player.picture_url}
              alt={player.name}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMU/g8AASsBFLeWyM0AAAAASUVORK5CYII="
            />
          </div>
        )}
        <div className={styles.playerName}>
          {active ? <span>{player.name}</span> : <h3>{player.name}</h3>}
        </div>
        <div className={styles.playerNumber}>{player.number}</div>
      </div>
    </button>
  );
};

export default Sticker;
