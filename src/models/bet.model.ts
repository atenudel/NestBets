// this lets user add new bet
import mongoose from 'mongoose';
import { Decimal128 } from 'bson';
// not ready to fill
const BetSchema = new mongoose.Schema({
  bet:{
    MATCH: Number, //using id of the spread
    USERS: [String], //using id of the users
    BETMONEY: [Decimal128] // big hmmm
  } 
});

export const Bet = mongoose.model("Bet",BetSchema);