import { Router } from "express";

import SpeciesController from "../controllers/SpeciesController";

const speciesRouter = Router();

speciesRouter.get("/", SpeciesController.getAllSpecies);
speciesRouter.post("/", SpeciesController.addSpecies);
speciesRouter.get("/min", SpeciesController.getMinSpecies);
speciesRouter.get("/exact/:speciesId", SpeciesController.getTheSpecies);

export default speciesRouter;
