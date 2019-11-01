import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    profile: {
        NAME: String,
        EMAIL: String,
        BALANCE: Number,
        WIN: Number,
        LOSS: Number
      }
});

// creating the user model
export const User = mongoose.model("User",UserSchema);