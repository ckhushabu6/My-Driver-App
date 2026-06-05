import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true
    },

    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    driverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver"
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },

    comment: {
      type: String,
      maxlength: 1000
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "Review",
  reviewSchema
);