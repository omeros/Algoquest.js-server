// src/routes/algoquest.ts

import express, { Request, Response } from 'express';
import { boundController } from '../controllers/boundController';

const router = express.Router();

/* POST request */
router.post('/', (req: Request, res: Response) => {
  boundController.run(req, res);
});

export default router;
