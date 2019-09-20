import { Router } from 'express';

import SpeciesController from '../controllers/SpeciesController';

const speciesRouter = Router();
 
speciesRouter.get('/', SpeciesController.getAllSpecies);
speciesRouter.get('/exact/:speciesId', SpeciesController.getTheSpecies);
speciesRouter.post('/', SpeciesController.addSpecies);
speciesRouter.get('/min', SpeciesController.getMinSpecies);

export default speciesRouter;
