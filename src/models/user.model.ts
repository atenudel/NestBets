import mongoose from "mongoose";
import { Decimal128 } from "bson";

const UserSchema = new mongoose.Schema({
ID: Number,
NAME: String,
BALANCE: Decimal128,
WIN: Number,
LOSS: Number
});

// creating the user model
export const User = mongoose.model("User",UserSchema);