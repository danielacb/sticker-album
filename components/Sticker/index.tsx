import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Player } from "../../types";

import * as S from "./styles";

type Props = {
  player: Player;
  active: boolean;
  onClick?: () => void;
};

const Sticker = ({ player, active, onClick }: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [animationMargin, setAnimationCenter] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    setAnimationCenter(windowWidth / 2 - 100);

    return () =>
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
  }, [windowWidth]);

  return (
    <motion.div
      initial={{
        scale: 0.6,
      }}
      whileInView={{ scale: 1 }}
      viewport={{
        margin: `0px -${animationMargin}px 0px -${animationMargin}px`,
      }}
    >
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
    </motion.div>
  );
};

export default Sticker;
