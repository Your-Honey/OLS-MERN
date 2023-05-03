import mongoose from "mongoose";

const userActivitySchema = new mongoose.Schema(
  {
    user: {
      type: String,
      ref: "User",
    },

    organisation: {
      type: String,
      ref: "Organisation",
    },
    device: {
      type: String,
      require: true,
    },
    logintime: {
      type: String,
      default: new Date().toLocaleString(),
    },
    logouttime: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("UserActivity", userActivitySchema);
