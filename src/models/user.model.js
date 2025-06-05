import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // when we want to enable searching field in the database
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      // index : true, // when we want to enable searching field in the database
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true, // when we want to enable searching field in the database
    },
    avatar: {
      type: String, // cloudinary url
      requires: true,
    },
    coverImage: {
      type: String, // cloudinary url
      // requires : true,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
        default: [],
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
