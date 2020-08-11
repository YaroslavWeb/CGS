import '../styles/globals.scss'
import React, { useEffect } from "react";
import socket from "../socket";
import Router, { useRouter }  from "next/Router";

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(()=>{
    console.log('1.Пользователь берёт токен из гаража.')
    const sessionId = localStorage.getItem('sessionId')
    socket.emit('check session id', sessionId)
    socket.on('session id is invalid', sessionId => {
      console.log('Сессия не найдена. /пиздуй на авторизацию')
      if(router.pathname !== "/auth" && router.pathname !== "/restore" && router.pathname !== "/reg" && router.pathname !== "/"){
        Router.push("/auth");
      }
    })
    socket.on('session id is valid', sessionId => {
      console.log('Сессия найдена. Сохраняем признак авторизации')
    })
  })
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
