import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
ID: Number,
NAME: String,
BALANCE: String,
WIN: Number,
LOSS: Number
});

// creating the user model
export const match = mongoose.model("user",UserSchema);