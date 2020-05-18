import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: '',
      todo_completed: false,
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/todos/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          todo_description: response.data.todo_description,
          todo_completed: response.data.todo_completed,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      todo_description: this.state.todo_description,
      todo_completed: this.state.todo_completed,
    };
    console.log(obj);
    axios
      .delete(
        'http://localhost:4000/todos/delete/' + this.props.match.params.id
      )
      .then((res) => console.log(res.data))
      .then(() => {
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div>
        <h3 align="center">Update Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <p>{this.state.todo_description}</p>
          </div>

          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Delete Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
