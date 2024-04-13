import mongoose, { mongo } from 'mongoose';

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    awards: Boolean
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;