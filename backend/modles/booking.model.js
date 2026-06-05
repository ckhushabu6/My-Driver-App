import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
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

    bookingType: {
      type: String,
      enum: [
        "hourly",
        "daily",
        "monthly",
        "outstation",
        "emergency"
      ],
      required: true
    },

    pickupAddress: {
      type: String,
      required: true
    },

    destinationAddress: {
      type: String,
      required: true
    },

    pickupLocation: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point"
      },

      coordinates: {
        type: [Number],
        required: true
      }
    },

    destinationLocation: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point"
      },

      coordinates: {
        type: [Number],
        required: true
      }
    },

    fare: {
      type: Number,
      default: 0
    },

    otp: String,

    status: {
      type: String,
      enum: [
        "pending",
        "accepted",
        "arrived",
        "started",
        "completed",
        "cancelled"
      ],
      default: "pending"
    },

    scheduledAt: Date
  },
  {
    timestamps: true
  }
);

bookingSchema.index({
  pickupLocation: "2dsphere"
});

bookingSchema.index({
  status: 1,
  customerId: 1
});

export default mongoose.model(
  "Booking",
  bookingSchema
);