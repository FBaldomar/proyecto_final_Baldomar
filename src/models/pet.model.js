import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: String,
  species: String,
  age: Number,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
});

const PetModel = mongoose.model("Pet", petSchema);
export default PetModel;
