import mongoose from "mongoose";

const complaintSchema =
  new mongoose.Schema(
    {
      customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },

      driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver"
      },

      bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
      },

      subject: {
        type: String,
        required: true
      },

      description: {
        type: String,
        required: true
      },

      status: {
        type: String,
        enum: [
          "open",
          "in_progress",
          "resolved",
          "closed"
        ],
        default: "open"
      }
    },
    {
      timestamps: true
    }
  );

export default mongoose.model(
  "Complaint",
  complaintSchema
);