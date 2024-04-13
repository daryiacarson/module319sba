const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Movie'}>
                <form action='/movies' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Director: <input type="text" name="name"/> <br />
                    Has Won Awards: <input type="checkbox" name="awards"/> <br />
                    <input type="submit" name=""value="Create Movie"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;