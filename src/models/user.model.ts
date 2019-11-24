import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    profile: {
        EMAIL: String,
        NAME: String,
        PASSWORD: String,
        BALANCE: Number
      }
});
// creating the user model
export const User = mongoose.model("User",UserSchema);