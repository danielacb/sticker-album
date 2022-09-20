import Image from "next/image";
import { Player } from "../../types";

import * as S from "./styles";

type Props = {
  player: Player;
  active: boolean;
  onClick?: () => void;
};

const Sticker = ({ player, active, onClick }: Props) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.Card>
        {active && (
          <S.ImageContainer>
            <Image
              src={player.picture_url}
              alt={player.name}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMU/g8AASsBFLeWyM0AAAAASUVORK5CYII="
            />
          </S.ImageContainer>
        )}
        <S.PlayerName>
          {active ? <span>{player.name}</span> : <h3>{player.name}</h3>}
        </S.PlayerName>
        <S.PlayerNumber>{player.number}</S.PlayerNumber>
      </S.Card>
    </S.Wrapper>
  );
};

export default Sticker;
