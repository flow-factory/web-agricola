import { Router } from 'express';
import health from './health';
import news from './news.routes';
import customers from './customers.routes';

const router = Router();
const prefix = 'v1';
router.use('/', health);
router.use(`/${prefix}/news`, news);
router.use(`/${prefix}/customers`, customers);

export default router;