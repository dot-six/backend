import express from 'express'
import type { Express, Request, Response } from 'express'

import api from 'api'

const app: Express = express();
export app;

app.use('/api', api);
