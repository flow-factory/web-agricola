import { Request, Response } from 'express';
import { db } from '../index';

export const all = async (req: Request, res: Response) => {
    const newsQuerySnapshot = await db.collection('news').get();
    const newsletters: any[] = [];
    newsQuerySnapshot.forEach(doc => {
        newsletters.push({
            id: doc.id,
            data: doc.data(),
            createdAt: doc.createTime,
            updatedAt: doc.updateTime
        });
    });
    return res.status(200).json(newsletters);
}

export const one = async (req: Request, res: Response) => {
    try {
        // if(!newOne.exists) throw new Error('Noticia No Encontrada');
        const newOne = await db.collection('news').doc(req.params.id).get();
        res.status(200).json({id: newOne.id, data: newOne.data(), createdAt: newOne.createTime, updatedAt: newOne.updateTime});
    } catch(error) {
        res.status(500).send(error);
    }
}

export const add = async (req: Request, res: Response) => {
    try {
        const newDoc = await db.collection('news').add(req.body);
        res.status(201).json({ status: 'created', id: newDoc.id });
    } catch(error) {
        res.status(500).send(error);
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        await db.collection('news').doc(req.params.id).set(req.body, { merge: true })
        res.status(201).json({ status: 'updated', id: req.params.id });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        await db.collection('news').doc(req.params.id).delete();
        res.status(201).json({ status: 'deleted', id: req.params.id });
    } catch (error) {
        res.status(500).send(error);
    }
}
