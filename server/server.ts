import * as express from 'express';
import {Application} from "express";
import { getAllProductsLuiz } from "./get-products-luiz.route";
import { getAllProductsPedro } from "./get-products-pedro.route";

const cors = require('cors')
const bodyParser = require('body-parser');
const app: Application = express();
const path = require('path')

app.use(bodyParser.json());
app.use(cors())
app.use('/public', express.static(path.join(__dirname, 'public')))


app.route('/luiz').get(getAllProductsLuiz);
app.route('/pedro').get(getAllProductsPedro);

const httpServer:any = app.listen(8000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
