const express = require("express");
const app = express();
const log = console.log;
const socket = require("socket.io");
const unique = require("uuid").v4;
const statusController = require("./statusController");
const PORT = 8000;
const Utils = require("./utils");

const server = app.listen(PORT, () => {
  log("listenting on ", PORT);
});
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("public"));

//code for socket.io
const io = socket(server);

io.on("connection", client => {
  const uuid = unique();
  client.emit("uuid", uuid);
  client.on("disconnect", () => {
    Utils.removeClient(client.id);
  });
  Utils.updateClients({ uuid, id: client.id, client });
});

app.use("/status", statusController);
