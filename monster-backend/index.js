const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const authMiddleWare = require('./src/middleware/authMiddleWare');
app.use(cors());
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

app.get("/", (req, res) => res.json({ message: "请访问 /api/v1/posts" }));
app.post("/api/v1/login", usersController.login);
app.use("/api/v1/users", authMiddleWare, require("./src/routes/users.router.js"));
app.use("/api/v1/posts", postsRouter);

app.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});
