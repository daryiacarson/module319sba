const React = require('react');
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
      <form action={`/books/${this.props.book._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="title" defaultValue={this.props.book.name}/><br/>
          Author: <input type="text" name="author"  defaultValue={this.props.author.name}/><br/>
          Has won awards:
              { this.props.book.awards? <input type="checkbox" name="awards" defaultChecked />: <input type="checkbox" name="awards"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;