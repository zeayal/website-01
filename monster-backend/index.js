const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const authMiddleWare = require("./src/middleware/authMiddleWare");
app.use(
  cors({
    origin: ["http://localhost:5173"], // 允许跨域的源站
    credentials: true, // 允许发送和接收 cookie
  })
);
app.use(bodyParser.json());
app.use(
  session({
    secret: "fds232ddv#",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
const dotenv = require("dotenv");
dotenv.config();
const postsRouter = require("./src/routes/posts.router");
const usersController = require("./src/controllers/auth.controller.js");
app.get("/test", (req, res) => {
  console.log("req.session.foo", req.session.foo);
  req.session.foo = "bar"; // 将数据写入到 session 中
  res.send("Hello World!");
});
app.get("/", (req, res) => res.json({ message: "请访问 /api/v1/posts" }));
app.post("/api/v1/login", usersController.login);
app.use(
  "/api/v1/users",
  authMiddleWare,
  require("./src/routes/users.router.js")
);
app.get("/api/v1/userInfo",  authMiddleWare, usersController.getUserInfo)
app.use("/api/v1/posts", authMiddleWare, postsRouter);
app.use(
  "/api/v1/categories",
  authMiddleWare,
  require("./src/routes/categories.router.js")
);

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
