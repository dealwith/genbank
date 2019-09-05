import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './server/routes/GenesRoutes';

config.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: true }));

const port = process.env.PORT || 9000;

app.use('/api/v1/genes', routes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.'
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;