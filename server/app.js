const express = require("express");
const mongoose = require("mongoose");
const app = express();
//https://github.com/bradtraversy/chatcord
//https://www.youtube.com/watch?v=jD7FnbI76Hg&t=718s

//3:00 
//https://www.youtube.com/watch?v=gzdQDxzW2Tw
mongoose.connect("mongodb://localhost/whatsappDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("really good");
});
  
let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is listening on the port ${port}`);
});
