import { Router } from 'express';
import { add, all, remove, update, one } from '../controllers/customers.controller'
const router = Router();
router.get('/', all);
router.get('/:id', one);
router.post('/', add);
router.put('/:id', update);
router.delete('/:id', remove);
export default router;