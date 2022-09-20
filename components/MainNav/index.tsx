import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStickers } from "../../context";
import Logo from "../../public/logo-sticker-album.svg";
import { supabase } from "../../utils/supabaseClient";

import { Nav, NavButton } from "./styles";

const MainNav = () => {
  const router = useRouter();
  const { setUser } = useStickers();

  const handleLogout = async () => {
    await supabase.auth.signOut();

    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event: "SIGNED_OUT", session: null }),
    }).then((res) => res.json());

    setUser(null);
    router.push("/login");
  };

  return (
    <Nav>
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
      <NavButton onClick={() => handleLogout()}>logout</NavButton>
    </Nav>
  );
};

export default MainNav;
