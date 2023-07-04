import express from 'express';

import { DbConfig, EnvConfig } from './configs/index.mjs';
import { AuthRoutes } from './routes/index.mjs'

EnvConfig();
DbConfig();

const app = express();

app.use(express.json())

app.use('/', AuthRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app runing at 5000 port`)
})