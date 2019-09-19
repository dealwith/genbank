import { Router } from 'express';

import SpeciesController from '../controllers/SpeciesController';
import { MAIN_URL } from '../constants/paths';

const speciesRouter = Router();
 
speciesRouter.get('/', SpeciesController.getAllSpecies);
speciesRouter.post('/', SpeciesController.addSpecies);
// speciesRouter.post('/', (req, res) => res.send('hello'));

export default speciesRouter;
