const React = require('react');
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Page">
                <form action={`/movies/${this.props.movie._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.movie.name} /><br />
                    Director: <input type="text" name="director" defaultValue={this.props.director.name} /><br />
                    Has Won Awards:
                    {this.props.movie.award ? <input type="checkbox" name="awards" defaultChecked /> : <input type="checkbox" name="awards" />}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        )
    }
}
