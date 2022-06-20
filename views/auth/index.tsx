import Image from "next/image";
import Logo from "../../public/logo-sticker-album.svg";
import styles from "./Auth.module.scss";

type Props = {
  children: React.ReactNode;
};

const Auth = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.logoContainer}>
          <Image
            src={Logo}
            alt="Logo writtern Sticker Album"
            width={330}
            height={132}
          />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Auth;
