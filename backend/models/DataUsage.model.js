const mongoose = require("mongoose");

// schema
const DataUsageSchema = new mongoose.Schema(
  {
    deviceId: { type: String, required: true },
    clientIp: { type: String, required: true },
    hostName: { type: String, required: true },
    download: { type: Number, required: true },
    upload: { type: Number, required: true },
    useageSeconds: { type: Number, required: true },
    createdAt: { type: String, required: true },
  },
  {
    timeStamps: false,
  }
);

// model
const model = mongoose.model("DataUsage", DataUsageSchema);

module.exports = model;
