import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MallSchema = new Schema({
        address: String,
        lat: Number,
        lng: Number,
        name: String,
        placeId: String,
        ranges: [String]
});

export default MallSchema;
