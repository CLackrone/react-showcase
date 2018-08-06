import React, { Component } from 'react'

class Login extends Component {

  constructor() {
    super()

    this.state = {
      name: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('i was clicked')
    console.log(this.state)
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <form>
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
            <button type="submit">Submit</button>
          </div>

        </div>
      </form>
      )
  }
}

export default Login