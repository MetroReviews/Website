import mongoose, { Schema, Document, model } from "mongoose";

interface User extends Document {
  token: string;
  id: string;
}

const userSchema: Schema = new Schema<User>({
  token: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: false,
  },
});

const oAuth = mongoose.models.auth || model("auth", userSchema);

export { oAuth, userSchema };
