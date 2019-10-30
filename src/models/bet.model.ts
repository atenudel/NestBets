// this lets user add new bet
import mongoose from 'mongoose';
import { Decimal128 } from 'bson';
// not ready to fill
const BetSchema = new mongoose.Schema({
  bet:{
    USERS: [String],
    BETMONEY: [Decimal128]
  } 
});

export const Bet = mongoose.model("Bet",BetSchema);