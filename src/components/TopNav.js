import React, { Component } from "react"
import { connect } from "react-redux"
import { setAuthedUser } from "../actions/authedUser"

class TopNav extends Component {
  
  logOut = () => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(""))
    window.location.href = "/"
  }

  render() {
    const { username, avatar } = this.props
    return (
      <ul className='navbar-nav ms-md-auto align-items'>
        <li className='nav-item align-items' style={{ display: "flex" }}>
          {username !== "" ? (
            <span className='nav-link nav-color'> Hello, {username}</span>
          ) : null}
          {username !== "" ? (
            <img
              src={avatar}
              alt={`Avatar of ${username}`}
              className='avatar img-thumbnail rounded-circle'
            />
          ) : null}
        </li>
        <li className='nav-item '>
          <a className='nav-link' href='/' style={{height:'100%'}} onClick={this.logOut}>
            {" "}
            Log Out{" "}
          </a>
        </li>
      </ul>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    username: authedUser && users ? users[authedUser].name : "",
    avatar: authedUser && users ? users[authedUser].avatarURL : "",
  }
}

export default connect(mapStateToProps)(TopNav)
