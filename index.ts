import express from 'express';
import Router from './Routers';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Interceptor from './Middlewares/Interceptor';
import cors from 'cors';
dotenv.config();

const app = express();
const Port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(Interceptor);
app.use(Router);

app.listen(Port, () => {
    console.log(`listening to ${Port}`);
});