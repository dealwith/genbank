import { Router } from 'express';
import GenesController from '../controllers/GenesController';

const genesRouter = Router();

genesRouter.get('/', GenesController.getAllGenes);
genesRouter.post('/', GenesController.addGenes);
genesRouter.get('/:id', GenesController.getAGen);
genesRouter.put('/:id', GenesController.updateGenes);
genesRouter.delete('/:id', GenesController.deleteGenes);

export default genesRouter;
