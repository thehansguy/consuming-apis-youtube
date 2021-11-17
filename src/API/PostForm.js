import React, { Component } from "react";

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userId">User Id</label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
