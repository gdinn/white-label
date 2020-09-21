import {Request, Response} from 'express';
import {PRODUCTS_PEDRO} from "./db-data";

export function getAllProductsPedro(req: Request, res: Response) {
  console.log("Retrieving products data ...");
  setTimeout(() => {
    res.status(200).json({payload:Object.values(PRODUCTS_PEDRO)});
  }, 100);
}