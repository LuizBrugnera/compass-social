import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './src/app/routes/router';
import { main } from './src/database/conn/conn';
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());
app.use("/api/v1", router);

main();

app.listen(process.env.PORT || 3005, () => {
    console.log('Servidor da API rodando....');
})

export default app;