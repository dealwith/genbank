import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: true }));

const port = process.env.PORT || 8000;

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.'
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;