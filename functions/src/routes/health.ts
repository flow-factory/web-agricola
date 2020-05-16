import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
    return res.json({'status':'OK', 'message':'api working succesfully'});
});

export default router;