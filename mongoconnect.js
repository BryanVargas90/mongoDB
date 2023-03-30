import dotenv from "dotenv";

dotenv.config();
const MONGOURI = process.env.MONGOURI;

import { MongoClient } from "mongodb";
export const client = new MongoClient(MONGOURI); // use the URI path
// connect to db - or create if there is none
export const database = client.db("products");
// connect to collection
export const fruitscollection = database.collection("fruits");
export const toysCollection = database.collection("toys");

//Create instance of Mongo
