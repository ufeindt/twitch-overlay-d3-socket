var socket = io("http://localhost:5000/socket.io/");

var messages = document.getElementById("messages");
var form = document.getElementById("form");
var input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("new follower", input.value);
    input.value = "";
  }
});
