import React, { useRef } from "react";
import MainLayout from "../../client/layouts/MainLayout";

const Restore = () => {
  const inputEmail = useRef(null);

  const restorePassword = () => {
    const user = {
      email: inputEmail.current.value,
    };
  };
  return (
    <MainLayout seoTitle={"Восстановление пароля"}>
      <div className="container">
        <div className="row align-items-center" style={{ height: "90vh" }}>
          <div className="col-sm-10 col-md-6 offset-sm-1 offset-md-3">
            <form className="border p-4 bg-light">
              <h2>Восстановление пароля</h2>
              <div className="form-group my-4">
                <label>Электронная почта</label>
                <input
                  ref={inputEmail}
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="user@mail.com"
                  required
                />
              </div>
              <button
                type="button"
                className="btn btn-lg btn-primary btn-block"
                onClick={restorePassword}
              >
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Restore;
