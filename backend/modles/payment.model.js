import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true
    },

    amount: {
      type: Number,
      required: true
    },

    paymentMethod: {
      type: String,
      enum: [
        "razorpay",
        "cash"
      ]
    },

    transactionId: String,

    razorpayOrderId: String,

    status: {
      type: String,
      enum: [
        "pending",
        "success",
        "failed",
        "refunded"
      ],
      default: "pending"
    }
  },
  {
    timestamps: true
  }
);

paymentSchema.index({
  bookingId: 1
});

export default mongoose.model(
  "Payment",
  paymentSchema
);