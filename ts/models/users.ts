import jwt from "jsonwebtoken";
import mongoose, { Document, model, Schema } from "mongoose";
import { Config } from "../cfg";

const cfg = new Config();

export interface IUser extends Document {
  username: string;
  hash: string;
  salt: string;
}

const UserSchema: Schema = new Schema({
  username: { type: String, lowercase: true, unique: true },
  hash: String,
  salt: String
});

UserSchema.methods.generateJWT = function(): string {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username
      // exp : parseInt(exp.getTime() / 1000),
    },
    cfg.token.secret,
    {
      expiresIn: cfg.token.age
    }
  );
};

// UserSchema.methods.setPassword = function(password) {
// 	this.salt = crypto.randomBytes(16).toString('hex');
// 	this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64)
// 			.toString('hex');
// };

// UserSchema.methods.validPassword = function(password) {
// 	var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
// 	return this.hash === hash;
// };

const User = model<IUser>("User", UserSchema);
export default User;
