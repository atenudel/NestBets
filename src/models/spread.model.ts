// this is for the spreads
// spreads are from CG Technology
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

/* alternate model for this.
const SpreadSchema = new mongoose.Schema({
    spread: {
        WEEK: Number,
        TEAM1: String,
        TEAM2: String,
        TEAM1 SPREAD: Number,
        TEAM2 SPREAD: Number
        TEAM1 MONEYLINE: Number,
        TEAM2 MONEYLINE: Number   
    }
}); */

// creating the model
export const Spread = mongoose.model("Spread",SpreadSchema);