import { Request, Response, NextFunction } from 'express';
export const isAdminMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(req.headers['is-admin']){
        next();
    } else {
        res.status(403).send('Unauthorized');
    }
}