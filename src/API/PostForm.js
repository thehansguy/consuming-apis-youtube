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

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="title">User Id</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="body">User Id</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
