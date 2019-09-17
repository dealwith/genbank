import { Router } from 'express';

import SpeciesController from '../controllers/SpeciesController';
import { MAIN_URL } from '../constants';

const speciesRouter = Router();

speciesRouter.get(MAIN_URL, SpeciesController.getAllSpecies());

export default speciesRouter;
