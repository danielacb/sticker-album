import type { AppProps } from "next/app";
import { useEffect } from "react";
import { StickersProvider } from "../context";
import "../styles/globals.scss";
import { supabase } from "../utils/supabaseClient";

function MyApp({ Component, pageProps }: AppProps) {
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
    <StickersProvider>
      <Component {...pageProps} />
    </StickersProvider>
  );
}

export default MyApp;
