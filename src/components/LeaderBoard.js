import React, { Component } from "react"
import { connect } from "react-redux"
import Card from "./Card.js"

class LeaderBoard extends Component {
  render() {
    const { users } = this.props
    const isLeaderShipPage = true

    return (
      <div>
        {users.map((currUser) => {
          return (
            <Card
              key={currUser.id}
              id={currUser.id}
              user={currUser}
              isLeaderShip={isLeaderShipPage}
            />
          )
        })}
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const keys = Object.keys(users)
  let sortedUsers = []
  keys.forEach((id) => {
    const user = users[id]
    const answers = Object.keys(user.answers).length
    const questions = user.questions.length
    const total = answers + questions
    const sortedUser = {
      ...user,
      answers,
      questions,
      total,
    }
    sortedUsers.push(sortedUser)
  })
  if (sortedUsers.length > 0) {
    sortedUsers = sortedUsers.sort((a, b) => (a.total < b.total ? 1 : -1))
  }
  return {
    users: sortedUsers,
  }
}
export default connect(mapStateToProps)(LeaderBoard)
