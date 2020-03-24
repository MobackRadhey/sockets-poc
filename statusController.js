const express = require("express");
const router = express.Router();
const Utils = require("./utils");

router.post("/", function(req, res, next) {
  const { uuid, message } = req.body;
  let clientData = Utils.getClientByUUID(uuid);
  if (clientData) {
    clientData.client.emit("status", message);
    res.status = 200;
    res.end();
  } else {
    res.status = 400;
    res.end("couldnot find client with uuid", uuid);
  }
});
module.exports = router;
