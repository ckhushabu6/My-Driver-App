import mongoose from "mongoose";

const notificationSchema =
  new mongoose.Schema(
    {
      receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },

      title: {
        type: String,
        required: true
      },

      message: {
        type: String,
        required: true
      },

      type: {
        type: String,
        enum: [
          "booking",
          "payment",
          "system"
        ]
      },

      isRead: {
        type: Boolean,
        default: false
      }
    },
    {
      timestamps: true
    }
  );

notificationSchema.index({
  receiverId: 1,
  isRead: 1
});

export default mongoose.model(
  "Notification",
  notificationSchema
);