import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import genesRouter from './server/routes/GenesRoutes';
import speciesRouter from './server/routes/SpeciesRoutes';
import authRouter from './server/routes/AuthRoutes';
import { GENES_API, SPECIES_API, path } from './server/constants/paths';

config.config();

const app = express();
console.clear();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: true }));

const port = process.env.PORT || 8000;

app.use(path.AUTH_API, authRouter);
app.use(GENES_API, genesRouter);
app.use(SPECIES_API, speciesRouter);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.'
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
