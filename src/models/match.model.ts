import mongoose from "mongoose";
import { Double } from "bson";

const SpreadSchema = new mongoose.Schema({
WEEK: Number,
TEAM1: String,
TEAM2: String,
SPREAD: Double
});

// creating the model
export const match = mongoose.model("match",SpreadSchema);