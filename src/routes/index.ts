import { Router } from 'express';

import * as Reversible from '../controllers/ReversibleController';
const router = Router();

router.post('/check', Reversible.check);

export default router;
