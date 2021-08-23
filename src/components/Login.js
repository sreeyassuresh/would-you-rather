import React, { Component } from "react"
import { connect } from "react-redux"
import logo from "../utils/images/comic1.png"
import { setAuthedUser } from "../actions/authedUser"

class Login extends Component {
  onUserChange = (event) => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(event.target.value))
  }

  render() {
    const { users } = this.props

    return (
      <div
        className='container login col-md-8'
        style={{ marginBottom: "20px" }}>
        <div className='col-md-12'>
          <div className='row login-text'>
            <h4>
              <strong>Welcome To Would You Rather App!</strong>
            </h4>
            <div>Please sign in to continue</div>
          </div>
          <div className='row'>
            <img src={logo} className='img-thumbnail' alt='Would You Rather' />
          </div>
          <div className='row signIn'>
            <h4>
              <strong>Sign In</strong>
            </h4>
          </div>
          <select
            onChange={this.onUserChange}
            className='form-select'
            aria-label='Default select example'
            defaultValue=''>
            <option value='' disabled>
              Please select a user
            </option>
            {users.map(({ id, name }) => (
              <option value={id} key={id}>
                {" "}
                {name}{" "}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  let userArray = []

  Object.keys(users).forEach(function (key) {
    let obj = {
      id: users[key].id,
      name: users[key].name,
      avatar: users[key].avatarURL,
    }
    userArray.push(obj)
  })

  return {
    users: userArray,
    authedUser,
  }
}
export default connect(mapStateToProps)(Login)
