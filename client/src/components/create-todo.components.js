import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
   constructor(props) {
      super(props);
      this.state = {
         todo_description: '',
         todo_completed: false
      }
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   }

   onChangeDescription(e) {
      this.setState({
         todo_description: e.target.value
      });
   }

   onSubmit(e) {
      e.preventDefault();
      console.log('Form submitted!');
      console.log(`Description: ${this.state.todo_description}`);
      const newTodo = {
         todo_description: this.state.todo_description,
         todo_completed: this.state.todo_completed
      };

      axios.post('http://localhost:4000/todos/add', newTodo);

      this.setState({
         todo_description: '',
         todo_completed: false
      });
   }

   render() {
      return (
         <div style={{marginTop: 10}}>
            <h3>Create New Todo</h3>
            <form onSubmit={this.onSubmit}>
               <div className='form-group'>
                  <label>Description: </label>
                  <input  type='text'
                     className='form-control'
                     value={this.state.todo_description}
                     onChange={this.onChangeDescription}
                  />
               </div>
               <div className='form-group'>
                  <input type='submit' value='Create Todo' className='btn btn-primary' />
               </div>
            </form>
         </div>
      );
   }
}
