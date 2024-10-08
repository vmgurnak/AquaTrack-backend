import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import env from './utils/env.js';

const port = env('PORT', 3000);

const startServer = () => {
  const app = express();

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(cors());
  app.use(express.json());

  app.get('/users', (req, res) => {
    res.json('Response from server route /users');
  });

  app.get('/water', (req, res) => {
    res.json('Response from server route /water');
  });

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};

export default startServer;
