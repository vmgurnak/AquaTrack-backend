import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import env from './utils/env.js';

const port = env('PORT', 3000);

const startServer = () => {
  const app = express();

  app.use(morgan('tiny'));
  app.use(cors());
  app.use(express.json());

  app.get('/users', (req, res) => {
    res.send('Response from server route /users');
  });

  app.get('/water', (req, res) => {
    res.send('Response from server route /water');
  });

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};

export default startServer;
