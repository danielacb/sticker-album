import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

import { FormContainer, ErrorMessage } from "./styles";

const SignUpForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const { user, error } = await supabase.auth.signUp({ email, password });

      if (error) throw error;

      if (user && !error) router.push("/");
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
      <form onSubmit={handleSignUp}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
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
        />

        <label htmlFor="confirm-password">Confirm password</label>
        <input
          id="confirm-password"
          type="password"
          name="confirm-password"
          placeholder="Confirm your password"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.currentTarget.value)
          }
        />
        <button type="submit" className="full">
          {loading ? "Loading" : "Sign Up"}
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <Link href="/login">
          <a>Sign in</a>
        </Link>
      </p>
    </FormContainer>
  );
};

export default SignUpForm;
