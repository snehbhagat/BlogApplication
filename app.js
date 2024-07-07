import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Temporary data store
let posts = [];

//routes
app.get('/' , (req,res) => {
    res.render('home' , {posts:posts});
})

app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`);
});