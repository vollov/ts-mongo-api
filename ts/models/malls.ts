import { model, Schema } from "mongoose";

const MallSchema = new Schema({
  address: String,
  lat: Number,
  lng: Number,
  name: String,
  placeId: String,
  ranges: [String]
});

const Mall = model("Mall", MallSchema);
export default Mall;
