import React, { useEffect, useState } from "react";
import Router from "next/Router";
import MainLayout from "../client/layouts/MainLayout";
import socket from "../socket";
// import firebase from "firebase";

const Index = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <MainLayout seoTitle={"Главная"}>
      <div>
        <h1>Coop game serve</h1>
        {isAuth ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              Router.push("/games");
            }}
          >
            Начать играть
          </button>
        ) : (
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                Router.push("/auth");
              }}
            >
              Войти
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                Router.push("/reg");
              }}
            >
              Зарегаться
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Index;

// /      - главнайа сраниса
// /auth  - афторизация пользователя (можно войти через вк, гугл)
// /reg   - регеcстрация пользователя
// /games - списак комнад и возмошность создадь свойу
