import { useEffect, useLayoutEffect } from "react";
import { Player } from "../../types";
import Sticker from "../Sticker";

import * as S from "./styles";

type Props = {
  player?: Player;
  isOpen: boolean;
  closeModal: () => void;
};

const PlayerModal = ({ player, isOpen, closeModal }: Props) => {
  useEffect(() => {
    const handleKeyboardDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyboardDown);

    return () => {
      window.removeEventListener("keydown", handleKeyboardDown);
    };
  }, [closeModal]);

  useLayoutEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }
  }, [isOpen]);

  if (!isOpen) return <></>;

  return (
    <S.Wrapper onClick={closeModal}>
      <S.Modal>
        <S.CloseModalButton>X</S.CloseModalButton>
        {player && <Sticker player={player} active={true} />}
      </S.Modal>
    </S.Wrapper>
  );
};

export default PlayerModal;
