import { client, toysCollection } from "../mongoconnect.js";

const addToy = async () => {
  //get collection

  const myToy = {
    name: "Optimus Prime",
    type: "Transformer",
    cool: true,
    price: 40,
    description: "Leader autobot, real cool clue semi truck with sword",
  };

  const addedToy = await toysCollection.insertOne(myToy);
  console.log(addedToy);
};
addToy();
