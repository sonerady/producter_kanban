const mongoose = require("mongoose");
const { schemaOptions } = require("./modelOptions");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  schemaOptions
);

module.export = mongoose.model("User", userSchema);
