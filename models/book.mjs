import mongoose, { mongo } from 'mongoose';

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    awards: Boolean
});

const Book = mongoose.model('Book', BookSchema);

export default Book;