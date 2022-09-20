import type { AppProps } from "next/app";
import { useEffect } from "react";
import { StickersProvider } from "../context";
import { supabase } from "../utils/supabaseClient";

import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";

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
    <ThemeProvider theme={theme}>
      <StickersProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </StickersProvider>
    </ThemeProvider>
  );
}

export default MyApp;
