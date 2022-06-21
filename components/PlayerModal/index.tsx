import { useEffect, useLayoutEffect } from "react";
import { Player } from "../../types";
import Sticker from "../Sticker";
import styles from "./styles.module.scss";

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
    <div className={styles.modalWrapper} onClick={closeModal}>
      <div className={styles.modal}>
        <button onClick={closeModal} className={styles.closeModalButton}>
          X
        </button>
        {player && <Sticker player={player} active={true} />}
      </div>
    </div>
  );
};

export default PlayerModal;
