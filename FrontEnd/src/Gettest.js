import React, { form } from 'react';
import axios from 'axios';


export default class Gettest extends React.Component {
    constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       age: '',
       salary: '',
       hobby: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.get('https://sheet.best/api/sheets/5db50e57-6233-4f52-aa35-ac163073e053')
    .then(response => {
      console.log(response);
    })

  }

    render() {
        return (
            <div>
                <a href='/'>回到home</a>
                <form className="form" onSubmit={this.submitHandler}>
                    
                      <label>Name</label>
                      <input placeholder="Enter your name" type="text" name="name" defaultValue={this.state.name} onChange={this.changeHandler} />
                    
                    
                      <label>Age</label>
                      <input placeholder="Enter your age" type="number" name="age" defaultValue={this.state.age} onChange={this.changeHandler} />
                    
                      <label>Salary</label>
                      <input placeholder="Enter your salary" type="number" name="salary" onChange={this.changeHandler} />
                    
                      <label>Hobby</label>
                      <input placeholder="Enter your hobby" type="text" name="hobby" onChange={this.changeHandler} />
                    
                    <button color="blue" type="submit">Submit</button>
                  </form>
            </div>
        )
    }
}