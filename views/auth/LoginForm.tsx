import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

import { FormContainer, ErrorMessage } from "./styles";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { user, error, session } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) throw error;

      await fetch("/api/auth", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        credentials: "same-origin",
        body: JSON.stringify({ event: "SIGNED_IN", session }),
      }).then((res) => res.json());

      if (user && !error) router.push("/");
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <h1>Login</h1>
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.currentTarget.value)
          }
          required
        />
        <button type="submit" className="full">
          {loading ? "Loading" : "Login"}
        </button>
      </form>
      <p>
        Don&apos;t have an account yet?{" "}
        <Link href="/signup">
          <a>Sign up</a>
        </Link>
      </p>
    </FormContainer>
  );
};

export default LoginForm;
