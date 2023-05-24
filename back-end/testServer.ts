import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './src/app/routes/router';
import { main } from './src/database/conn/conn';
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());
app.use("/api/test", router);

export default app;