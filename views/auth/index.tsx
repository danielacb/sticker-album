import Image from "next/image";
import { useEffect } from "react";
import Logo from "../../public/logo-sticker-album.svg";
import { supabase } from "../../utils/supabaseClient";
import styles from "./Auth.module.scss";

type Props = {
  children: React.ReactNode;
};

const Auth = ({ children }: Props) => {
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json());
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

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
