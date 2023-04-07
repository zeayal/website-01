const express = require('express');
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const postsRouter = require('./src/routes/posts.router');

app.get('/', (req, res) => res.json({ message: "请访问 /api/v1/posts" }));
app.use('/api/v1/posts', postsRouter);

app.listen(8080, () => {
    console.log('Server is running on port http://localhost:8080');
})