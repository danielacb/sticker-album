import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../public/logo-sticker-album.svg";
import { supabase } from "../../utils/supabaseClient";
import styles from "./styles.module.scss";

const MainNav = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className={styles.nav}>
      <Link href="/">
        <a>
          <Image
            src={Logo}
            alt="Logo writtern Sticker Album"
            width={110}
            height={44}
          />
        </a>
      </Link>
      <button onClick={() => handleLogout()}>logout</button>
    </div>
  );
};

export default MainNav;
