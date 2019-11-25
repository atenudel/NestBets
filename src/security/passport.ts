import mongoose from 'mongoose';
import passport from 'passport';
import {SECRET} from '../constants/api.constants';
import {User} from '../models/user.model';

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET
};
// the jwt login strategy
const JWTLogin = new JwtStrategy(jwtOptions, function(payload:any, done:any) {
    let id = new mongoose.Types.ObjectId(payload.data.id);
    User.findById(id, function (err, user) {
        if (err) { return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });

});
passport.use(JWTLogin);
exports.requireAuth = passport.authenticate('jwt', {session: false});