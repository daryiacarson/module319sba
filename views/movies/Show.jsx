const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const movie = this.props.movie;

        return (
            <DefaultLayout title="Show an Individual Mpvies">
                <p>The {movie.name} is {movie.director}</p>
                {movie.awards ? 'Has Won Awards' : "No Awards Yet"}
                <br />
                <a href={`/movies/${movie._id}/edit`}>Edit This Movie</a>
                <form action={`/movies/${movie._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/movies">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;