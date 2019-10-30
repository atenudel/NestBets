// this lets user add new bet
import mongoose from 'mongoose';
import { Decimal128 } from 'bson';
// not ready to fill
const BetSchema = new mongoose.Schema({
    USERS: [String],
    BETMONEY: [Decimal128]
});

export const bet = mongoose.model("bet",BetSchema);