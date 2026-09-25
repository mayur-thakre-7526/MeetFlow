import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  token: {
    type: String,
  },
});

const userModel = mongoose.model("User", userSchema);

export { userModel };
// without default means we can export many things but with default means we only export one thing
