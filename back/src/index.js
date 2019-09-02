import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MAIN_URL } from './constants';

const app = express();
app.use(cors());

app.get(MAIN_URL, (req, res) => {
  res.send('genbak')
})
app.listen(process.env.PORT, () => {
  console.log(`App run on port ${process.env.PORT}`)
})
