import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import MainNav from "../components/MainNav";
import { useStickers } from "../context";
import { User } from "../types";
import { supabase } from "../utils/supabaseClient";

type Props = {
  user: User;
};
const Home: NextPage<Props> = ({ user }) => {
  const { setUser } = useStickers();

  useEffect(() => {
    setUser(user);
  }, [setUser, user]);

  return (
    <>
      <MainNav />
      <h1>Hello {user.email}</h1>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return { props: {}, redirect: { destination: "/login", permanent: false } };
  }

  const userInfo = {
    id: user.id,
    email: user.email,
  };
  return { props: { user: userInfo } };
};
