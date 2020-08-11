const FIREBASE_CONFIG = require("../SUPER_SECRET_CONFIG_FB.JS") || "YOUR CONFIG"
const firebase = require("firebase");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

app.use(express.json());

// fake DB
const sessionsStorage = new Map();



io.on("connect", (socket) => {
  console.log("user connect");
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  socket.on("check session id", (sessionId) => {
    socket.emit("session id is invalid", sessionId);
  });

  socket.on("login", ({ email, password }) => {
    // sessionsStorage.set();
    console.log(email, password);
  });

  socket.on("reg", ({ email, password }) => {
    // sessionsStorage.set();
    console.log(email, password);
  });

  socket.on("resetPassword", ({ email }) => {
    // sessionsStorage.set();
    console.log(email);
  });

  // socket.on("authFB", ({ email, password }) => {
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((res) => {
  //       socket.join(res.user.uid);
  //       sessionsStorage.set(res.user.uid, email);
  //       console.log(sessionsStorage);
  //       socket.emit("getTokken", { token: res.user.uid, email });
  //     })
  //     .catch((e) => console.log(e));
  // });

  // socket.on("regFB", ({ email, password }) => {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(() => {
  //       console.log("пользователь зарегистрировался");
  //     })
  //     .catch((e) => console.log(e));
  // });
});

nextApp.prepare().then(() => {
  app.get("*", (req, res) => {
    return nextHandler(req, res);
  });

  app.post("/api/isAuth", (req, res) => {
    // const {token} = req.body;
    // console.log('token', token)
    // if (token && sessionsStorage.has(token.token)) {
    //   // console.log(token)
    //   res.send(true);
    // } else {
    //   res.send(false);
    // }
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
