import * as express from 'express';
import {Application} from "express";
import { getAllProductsLuiz } from "./get-products-luiz.route";
import { getAllProductsPedro } from "./get-products-pedro.route";

const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());

app.route('/luiz').get(getAllProductsLuiz);
app.route('/pedro').get(getAllProductsPedro);

const httpServer:any = app.listen(8000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
