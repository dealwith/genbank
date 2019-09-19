import { Router } from 'express';

import SpeciesController from '../controllers/SpeciesController';

const speciesRouter = Router();
 
speciesRouter.get('/', SpeciesController.getAllSpecies);
speciesRouter.get('/:speciesId', SpeciesController.getTheSpecies);
speciesRouter.post('/', SpeciesController.addSpecies);
speciesRouter.get('/min', SpeciesController.getMinSpecies);
// speciesRouter.post('/', (req, res) => res.send('hello'));

export default speciesRouter;
