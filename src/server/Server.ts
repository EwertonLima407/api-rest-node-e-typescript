import express from 'express';
import 'dotenv/config';

import './shared/services/TraducoesYup';
import { router } from './routes';
import cors from 'cors';


const server = express();


server.use(cors({
  origin: process.env.ENABLED_CORS?.split(';') || []
}))

server.use(express.json());

server.use(router);


export { server };
