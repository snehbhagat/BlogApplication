import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static('public'));

//Setting the main route
app.get('/', (req,res) => {
  res.render(__dirname + '/views/pages/index.ejs');
})

console.log(__dirname);

let blogList = [];
app.post('/home', (req,res) => {
  const blogTitle = req.body.blogTitle;
  const blogDescription = req.body.blogDes;
  blogList.push({
    id: generateId(),
    title: blogTitle,
    description: blogDescription,
  })
  res.render(post.ejs, {blogList: blogList});
});

function generateID() {
  return Math.floor(Math.random() * 10000);
}

//Starting the server
app.listen(port, () => {
  console.log(`Listening on port no ${port}`);
})