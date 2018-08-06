import React, { Component } from 'react'

class Form extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      age: '',
      location: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('i was clicked')
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          
          <div>
            <label>Name: </label>
            <input 
              type='text'
              onChange={e => this.handleChange(e)}
              name='name'
              value={this.state.name}
            />
          </div>

          <div>
            <label>Age: </label>
            <input 
              type='text'
              name='age'
            />
          </div>

          <div>
            <label>Location: </label>
            <input 
              type='text'
              name='location'
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>

        </div>
      </form>
    )
  }
}

export default Form