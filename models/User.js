const { Schema, model } = require("mongoose");
// const dateFormat = require("../utils/dateFormat");

// schema to initialize user name, email, thoughts, and friends columns
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Enter a valid email address",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Here we will reference and "GET" all the friends
UserSchema.virtual("friendTotal").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
