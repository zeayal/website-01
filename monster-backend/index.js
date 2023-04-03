const express = require('express');
const app = express();

const postsRouter = require('./src/routes/posts.router');

app.get('/', (req, res) => res.json({ message: "Welcome to Monster Backend" }));
app.use('/posts', postsRouter);

app.listen(8080, () => {
    console.log('Server is running on port http://localhost:8080');
})