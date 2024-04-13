import express from 'express';
const router = express.Router();
import Book from '../models/book.mjs';
import db from '../db/conn.mjs';

router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await Book.create([
            {
                name: 'Black Cake: A Novel',
                author: "Charmaine Wilkerson",
                awards: true
            }, 
            {
                name: 'Take My Hand: A Novel',
                author: "Dolen Perkins-Valdez",
                awards: true
            }
            ,{
                name: 'Perish: A Novel',
                author: "Latoya Watkins",
                awards: true
            }
        ])
        res.status(200).redirect('/books');
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const foundBooks = await Books.find({});
        res.status(200).render('books/Index', { Books: foundBooks})
        // res.status(200).send(foundBooks);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/new', (req, res) => {
    console.log('inNew')
    res.render('books/New');
})

router.delete('/:id', async (req, res) => {
    // res.send('deleting...');
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        console.log(deletedBook);
            res.status(200).redirect('/books');
        } catch (err) {
        res.status(400).send(err);
    }
});

router.put('/:id', async (req, res) => {
    if (req.body.awards === 'on') {
        req.body.awards = true;
    } else {
        req.body.awards = false;
    }

    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedBook);
        res.redirect(`/books/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.post('/', async(req, res) => {
    if (req.body.awards === 'on') { 
        req.body.awards = true;
    } else {                          
        req.body.awards = false;
    }
    console.log(req.body)

    try {
        const createdBook = await Book.create(req.body);
        res.status(200).redirect('/books');
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get("/:id/edit", async (req, res) => {
    try {
        const foundBook = await Book.findById(req.params.id);
        res.status(200).render('books/Edit', {book: foundBook});
    } catch (err) {
        res.status(400).send(err);
    }
})


router.get('/:id', async (req, res) => {
    try {
        const foundBook = await Book.findById(req.params.id);
        res.render('books/Show', {book: foundBook});
    } catch (err) {
        res.status(400).send(err);
    }
})

export default router;