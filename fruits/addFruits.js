import { client, fruitscollection } from "../mongoconnect.js";

const addFruit = async () => {
  const myFruit = {
    name: "Pear",
    taste: "Juicy",
    price: 420_102,
    stock: 5,
  };
  try {
    await client.connect();
    const addedFruit = await fruitscollection.insertOne(myFruit);
    console.log(addedFruit);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};
addFruit();
