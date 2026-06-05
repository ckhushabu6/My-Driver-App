import mongoose from "mongoose";

const emergencyContactSchema =
  new mongoose.Schema(
    {
      customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },

      name: {
        type: String,
        required: true
      },

      relationship: String,

      phone: {
        type: String,
        required: true
      }
    },
    {
      timestamps: true
    }
  );

export default mongoose.model(
  "EmergencyContact",
  emergencyContactSchema
);