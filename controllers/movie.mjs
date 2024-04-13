import express from 'express';
const router = express.Router();
import Movie from '../models/movie.mjs';
import db from '../db/conn.mjs';


router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await Movie.create([
            {
                name: 'Crooklyn',
                director: "Spike Lee",
                awards: true
            },
            {
                name: 'Do the Right Thing',
                director: "Spike Lee",
                awards: true
            },
            {
                name: 'Malcolm X',
                director: "Spike Lee",
                awards: true
            },
        ])

    }
    catch (err) {
        res.status(400).send(err);
    }

    router.get('/', async (req, res) => {
        try {
            const foundMovies = await Movie.find({});
            res.status(200).render('movies/Index', { Movie: foundMovies })
            // res.status(200).send(foundMovie);
        } catch (err) {
            res.status(400).send(err);
        }
    }),


        router.get('/new', (req, res) => {
            console.log('inNew')
            res.render('movies/New');
        }),

        router.delete('/:id', async (req, res) => {
            // res.send('deleting...');
            try {
                const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
                console.log(deletedMovie);
                res.status(200).redirect('/movies');
            } catch (err) {
                res.status(400).send(err);
            }
        }),

        router.put('/:id', async (req, res) => {
            if (req.body.awards === 'on') {
                req.body.awards = true;
            } else {
                req.body.awards = false;
            }

            try {
                const updatedMovie = await Movie.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    { new: true },
                );
                console.log(updatedMovie);
                res.redirect(`/movies/${req.params.id}`);
            } catch (err) {
                res.status(400).send(err);
            }
        }),

        router.post('/', async (req, res) => {

            if (req.body.awards === 'on') {
                req.body.awards = true;
            } else {
                req.body.awards = false;
            }
            console.log(req.body)

            try {
                const createdMovie = await Movie.create(req.body);
                res.status(200).redirect('/movies');
            } catch (err) {
                res.status(400).send(err);
            }
        }),


        router.get("/:id/edit", async (req, res) => {
            try {
                const foundMovie = await Movie.findById(req.params.id);
                res.status(200).render('movies/Edit', { movie: foundMovie });
            } catch (err) {
                res.status(400).send(err);
            }
        }),

        router.get('/:id', async (req, res) => {
            try {
                const foundMovie = await Movie.findById(req.params.id);
                res.render('movies/Show', { movie: foundMovie });
            } catch (err) {
                res.status(400).send(err);
            }
        })
});
export default router;