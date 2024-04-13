const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { movies } = this.props;


        return (
            <DefaultLayout title={"Movies Index Page"}>
                <nav>
                    <a href="/movies/new">Create a New Movie</a>
                </nav>
                <ul>
                    {movies.map((movie, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/movies/${movie._id}`}>
                                    {movie.name}
                                </a> {' '}
                                is directed by {movie.director} <br></br>
                                {movie.awards
                                ? `Has Won Awards`
                            :   `No Awards Yet`}
                            <br />
                            <a href={`/movie/${movie._id}/edit`}>Edit This Movie</a>
                            <form action={`/movies${movie._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;