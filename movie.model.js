import mongoose from "mongoose";

//set rule/schema

const movieSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    leadActor: String,
});

//create table/model/collection
const Movie = mongoose.model("Movie",movieSchema);
export default Movie;