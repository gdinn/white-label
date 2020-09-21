import {Request, Response} from 'express';
import {PRODUCTS_LUIZ} from "./db-data";

export function getAllProductsLuiz(req: Request, res: Response) {
  console.log("Retrieving products data ...");
  setTimeout(() => {
    res.status(200).json({payload:Object.values(PRODUCTS_LUIZ)});
  }, 100);
}
