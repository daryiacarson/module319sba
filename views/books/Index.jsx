const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { books } = this.props;

        return (
            <DefaultLayout title={"Books Index Page"}>
                <nav>
                    <a href="/books/new">Create a New Book</a>
                </nav>
                <ul>
                    {books.map((Book, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/books/${Book._id}`}>
                                    {Book.name}
                                </a> {' '}
                                is titled {book.name} <br></br>
                                {book.award
                                ? `Has won awards`
                            :   `Has not won awards`}
                            <br />
                            <a href={`/books/${book._id}/edit`}>Edit This Book</a>
                            <form action={`/books/${book._id}?_method=DELETE`} method="POST">
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