import React, { useRef } from "react";
import MainLayout from "../../client/layouts/MainLayout";
import socket from "../../socket";

const Reg = () => {
  const inputEmail = useRef(null);
  const inputNickname = useRef(null);
  const inputPassword = useRef(null);
  const inputRePassword = useRef(null);

  const signUp = () => {
    const user = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
      nickname: inputNickname.current.value,
    };
    socket.emit('regFB', user)
  };
  return (
    <MainLayout seoTitle={"Регистрация"}>
      <div className="container">
        <div className="row align-items-center" style={{ height: "90vh" }}>
          <div className="col-sm-10 col-md-6 offset-sm-1 offset-md-3">
            <form className="form-signin border p-4 bg-light">
              <h2 className="form-signin-heading">Регистрация</h2>
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
                <label>Никнейм</label>
                <input
                  ref={inputNickname}
                  type="text"
                  className="form-control mb-2"
                  name="nickname"
                  placeholder="Pepa"
                  required
                />
              </div>

              <div className="form-group">
                <label>Пароль</label>
                <input
                  ref={inputPassword}
                  type="password"
                  className="form-control mb-2"
                  name="password"
                  placeholder="1qaz2wsx"
                  required
                />
                <label>Повторите пароль</label>
                <input
                  ref={inputRePassword}
                  type="password"
                  className="form-control mb-4"
                  name="rePassword"
                  placeholder="1qaz2wsx"
                  required
                />
              </div>
              <button
                type="button"
                className="btn btn-lg btn-primary btn-block"
                onClick={signUp}
              >
                Зарегистрироваться
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Reg;
