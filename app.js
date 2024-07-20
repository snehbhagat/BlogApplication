import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));
//Setting the main route
app.get('/', (req,res) => {
  res.render(__dirname + '/views/pages/index.ejs');
})

console.log(__dirname);

//Starting the server
app.listen(port, () => {
  console.log(`Listening on port no ${port}`);
})