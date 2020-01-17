const express = require('express');

const usersRouter = require('./users/userRouter');
const postsRouter = require('./posts/postRouter');

const server = express();

server.use(express.json());
server.use(logger)

server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} `
  );

  next();
}

module.exports = server;
