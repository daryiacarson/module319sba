import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import db from './db/conn.mjs';
import bookRoutes from './controllers/book.mjs';
import movieRoutes from './controllers/movie.mjs';

// creating express application and other variables
const app = express();
const PORT = process.env.PORT || 5050;

// app.use(express.json());

// ================ Set up view engine ================
//
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());


// ================ Middleware ================
//
app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));

// ================ Routes ================
//

app.use("/books", bookRoutes);
app.use("/movies", movieRoutes)

app.get('/', (req, res) => {
    res.send(
        `<div> this is my books and movies root route <br/><a href='/books'>books</a><br/><a href='/movies'>movies</a></div>`
    );
});

app.listen(PORT, () => {
    console.log(`listening`);
});