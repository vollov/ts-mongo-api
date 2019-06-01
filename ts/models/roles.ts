import { Document, model, Schema } from "mongoose";

export interface IRole extends Document {
  name: string;
  reportTo: string;
}

const RoleSchema = new Schema({
  name: String,
  reportTo: String
});

const Role = model<IRole>("Role", RoleSchema);
export default Role;
