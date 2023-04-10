const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const dotenv = require("dotenv")
dotenv.config()
const postsRouter = require('./src/routes/posts.router');

app.get('/', (req, res) => res.json({ message: "请访问 /api/v1/posts" }));
app.use('/api/v1/posts', postsRouter);

app.listen(8080, () => {
    console.log('Server is running on port http://localhost:8080');
})