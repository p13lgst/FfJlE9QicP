const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/message", (req, res) => {
  const { message } = req.body
  
  console.log(req.body)
  
  if (!message || typeof message !== "string") {
    return res.sendStatus(400)
  }
  
  console.log("Message recieved: " + message)
  res.sendStatus(200)
});
