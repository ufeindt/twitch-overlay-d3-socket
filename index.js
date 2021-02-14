const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static("scripts"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/controls.html");
});

app.get("/overlay/", (req, res) => {
  res.sendFile(__dirname + "/pages/overlay.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("new follower", (name) => {
    console.log("new follower: " + name);
    io.emit("follower", name);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
