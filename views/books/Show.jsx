const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const Book = this.props.Book;

        return (
            <DefaultLayout title="Show an Individual Book">
                <p>The Book {Book.name} is by {Book.author}</p>
                {Book.awards ? 'This book has won awards' : "No Awards Yet!"}
                <br />
                <a href={`/books/${Book._id}/edit`}>Edit This Book</a>
                <form action={`/books/${book._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/books">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;