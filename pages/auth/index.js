import React, { useRef, useEffect } from "react";
import MainLayout from "../../client/layouts/MainLayout";
import socket from "../../socket";
import Link from "next/link";

const Auth = () => {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const signIn = async () => {
    const user = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };
    socket.emit("login", user);
  };

  useEffect(() => {
    return () => socket.close();
  }, []);

  return (
    <MainLayout seoTitle={"Авторизация"}>
      <div className="container">
        <div className="row align-items-center" style={{ height: "90vh" }}>
          <div className="col-sm-10 col-md-6 offset-sm-1 offset-md-3">
            <form className="border p-4 bg-light">
              <h2>Авторизация</h2>
              <div className="form-group my-4">
                <label>Электронная почта</label>
                <input
                  ref={inputEmail}
                  type="text"
                  className="form-control mb-2"
                  name="email"
                  placeholder="user@mail.com"
                  required
                />
                <label>Пароль</label>
                <input
                  ref={inputPassword}
                  type="password"
                  className="form-control mb-4"
                  name="password"
                  placeholder="1qaz2wsx"
                  required
                />
              </div>
              <button
                type="button"
                className="btn btn-lg btn-primary btn-block"
                onClick={signIn}
              >
                Войти
              </button>
              <div>
                <Link href="/restore">
                  <a className="mt-2">Забыли пароль?</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Auth;
