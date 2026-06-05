import mongoose from "mongoose";

const driverSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },

    licenseNumber: {
      type: String,
      required: true,
      unique: true
    },

    licenseImage: String,

    experienceYears: {
      type: Number,
      default: 0,
      min: 0
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },

    totalTrips: {
      type: Number,
      default: 0
    },

    approvalStatus: {
      type: String,
      enum: [
        "pending",
        "approved",
        "rejected"
      ],
      default: "pending"
    },

    availability: {
      type: String,
      enum: ["online", "offline", "busy"],
      default: "offline"
    }
  },
  {
    timestamps: true
  }
);

driverSchema.index({
  approvalStatus: 1,
  availability: 1
});

export default mongoose.model(
  "Driver",
  driverSchema
);