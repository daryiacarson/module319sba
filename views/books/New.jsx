const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Book'}>
                <form action='/books' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Author: < input type="text" name="author"/> <br />
                    Awards: <input type="checkbox" name="awards"/> <br />
                    <input type="submit" name="" value="Create Book"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;