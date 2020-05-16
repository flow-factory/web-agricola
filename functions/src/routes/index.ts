import { Router } from 'express';
import health from './health';
import news from './news.routes';

const router = Router();
const prefix = 'v1';
router.use('/', health);
router.use(`/${prefix}/news/`, news);

export default router;