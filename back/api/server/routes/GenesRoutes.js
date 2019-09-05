import { Router } from 'express';
import GenesController from '../controllers/GenesController';

const router = Router();

router.get('/', GenesController.getAllGenes);
router.post('/', GenesController.addGenes);
router.get('/:id', GenesController.getAGen);
router.put('/:id', GenesController.updateGenes);
router.delete('/:id', GenesController.deleteGenes);

export default router;
