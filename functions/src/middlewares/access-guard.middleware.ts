import { Request, Response, NextFunction } from 'express';
import * as admin from 'firebase-admin';

export const accesGuardMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        res.status(403).send('Unauthorized');
        return;
    }

    const idToken = req.headers.authorization.split('Bearer ')[1];
    
    try {
        const decodedIdToken = await admin.auth().verifyIdToken(idToken);
        req = Object.assign(req, { user: decodedIdToken })
    return next();
    } catch(e) {
        return res.status(403).send('Unauthorized');
    }
}