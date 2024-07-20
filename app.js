import express from "express";
const app = express();
const port = 3000;

//Setting the main route
app.get('/', (req,res) => {
  res.send("Hello World");
})

//Starting the server
app.listen(port, () => {
  console.log(`Listening on port no ${port}`);
})