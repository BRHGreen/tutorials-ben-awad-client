import React from 'react';
import { Input } from 'antd'
class Register extends React.Component {
  state = {
    username: ''
  }

  onChange = (e) => {
    if (e.target.name === 'isAdmin') {

    } else {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  }

  render () {
    return (
      <div>
      <h1>Register</h1>
        <Input
          name='username'
          placeholder='username'
          onChange={e => this.onChange(e)}
          value={this.state.username} 
          />
      </div>
    )
  }
}

export default Register
