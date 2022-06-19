import type { GetServerSideProps, NextPage } from "next";
import { User } from "../types";
import { supabase } from "../utils/supabaseClient";

const Home: NextPage<User> = ({ user }) => {
  return (
    <div>
      <h1>Hello {user.email}</h1>
    </div>
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
