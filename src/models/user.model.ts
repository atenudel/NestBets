import mongoose, { Document, Model, model, Schema } from "mongoose";
import bcrypt from 'bcrypt';
import hash from 'bcrypt'

export interface IUser extends Document {
  email:string;
  password:string;
  profile:string;
}

export const UserSchema: Schema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: "please enter an email",
    trim: true
  },
  password: {
    type: String,
    required: "please enter password",
    trim: true
  },
  profile: {
    firstName: { type: String },
    lastName: { type: String },
  }
});

// Pre-save of user to database, hash password if password is modified or new
UserSchema.pre('save', function (next) {
  const user = this;
  const SALT_FACTOR = 5;

  if (!this.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) 
        return next(err);
    // changed from user.password...
    bcrypt.hash(this.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      } // changed from user.password...
      this.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword: any, cb: { (arg0: any, arg1: boolean): void; (arg0: Error): void; (arg0: any, arg1: boolean): void; }) {
  if (this.password === '*') {
      cb(null,false);
      return;
  }
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) { 
      return cb(err); 
    }
    cb(null, isMatch);
  });
}
UserSchema.methods.toJson = function () {
  return {
    _id: this._id,
    firstName: this.profile.firstName,
    lastName: this.profile.lastName,
    email: this.email,
  }
}
// creating the user model
export const User: Model<IUser>= mongoose.model<IUser>("User",UserSchema);