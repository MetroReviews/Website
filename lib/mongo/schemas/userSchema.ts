import mongoose, { Schema, Document, model } from "mongoose";

interface BaseUser extends Document {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  blacklisted: boolean;
  staff: boolean;
  sudo: boolean;
}

const baseUserSchema: Schema = new Schema<BaseUser>({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
  discriminator: {
    type: String,
    required: false,
  },
  staff: {
    type: Boolean,
    default: false,
  },
  sudo: {
    type: Boolean,
    default: false,
  },
  blacklisted: {
    type: Boolean,
    default: false,
  },
});

const users = mongoose.models.users || model("users", baseUserSchema);

export { users, baseUserSchema };
