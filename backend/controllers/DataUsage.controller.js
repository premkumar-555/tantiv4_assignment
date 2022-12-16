const express = require("express");
const model = require("../models/DataUsage.model");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const keys = [
      "deviceId",
      "clientIp",
      "hostName",
      "download",
      "upload",
      "useageSeconds",
      "createdAt",
    ];
    const {
      deviceId,
      clientIp,
      hostName,
      download,
      upload,
      useageSeconds,
      createdAt,
    } = req.body;
    let checkKeys = true;
    keys.forEach((ele) => {
      if (!ele in req.body) {
        checkKeys = false;
      }
    });
    if (!checkKeys) {
      return res.status(400).send("Please enter all credentials");
    } else {
      const records = await model.create(req.body);
      return res.status(200).send(records);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("", async (req, res) => {
  try {
    return res.send("success");
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = router;
