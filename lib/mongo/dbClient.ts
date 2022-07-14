import mongoose from "mongoose";
import { config } from "@/root/utils/authConfig";

if (!config.mongo) {
  throw new Error("Please define the mongo connection string.");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function callDBClient() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      family: 4,
      autoIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(config.mongo, opts).then((mongo) => {
      return mongo;
    });
  }

  cached.conn = await cached.promise;

  return cached.conn;
}

export default callDBClient;
