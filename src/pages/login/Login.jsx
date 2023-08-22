import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../../components/pagenav/PageNav";
import Button from "../../components/button/Button";
// import { useAuth } from "../../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUser } from "../../auth/useUser";
import { useLoginUser } from "../../auth/useUserLogin";
export default function Login() {
  const [email, setEmail] = useState("Bassam@Test.com");
  const [password, setPassword] = useState("testing");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // const { login, isAuthenticated } = useAuth();
  const { isAuthenticated } = useUser();
  const { mutate } = useLoginUser();
  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated, navigate]);

  function onSubmit({ email, password }) {
    console.log({ email, password });
    mutate({ email, password });
  }
  return (
    <main className={styles.login}>
      <PageNav />
      <div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.row}>
            <label htmlFor="email">Email address</label>
            <input
              {...register("email", { required: "email is required :)" })}
              type="email"
              id="email"
              value={email}
              className="text-gray-700 font-semibold"
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: "password is required :)" })}
              id="password"
              value={password}
              className="text-gray-700 font-semibold"
            />
          </div>
          <div className={styles.flex}>
            <Button style="primary">Login</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
