// this is for the spreads
import mongoose from "mongoose";
import { Double } from "bson";

const SpreadSchema = new mongoose.Schema({
spread: {
    WEEK: Number,
    TEAM1: String,
    TEAM2: String,
    SPREAD: Number 
}
});

// creating the model
export const Spread = mongoose.model("Spread",SpreadSchema);