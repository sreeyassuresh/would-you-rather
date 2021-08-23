import React, { Component } from "react"
import { connect } from "react-redux"
import PollCard from "./PollCard"
import LeaderCard from "./LeaderCard"
import { Redirect } from "react-router-dom"

class Card extends Component {
  renderElement() {
    const { user, isLeaderShip, hasAnswered } = this.props

    if (isLeaderShip) return <strong>{user.name} </strong>
    else if (hasAnswered) {
      return <strong>{user.name} asked </strong>
    } else {
      return <strong>{user.name} asks</strong>
    }
  }

  render() {
    const {
      user,
      isLeaderShip,
      isQuestionPage,
      question,
      hasAnswered,
      answer,
      invalidID,
    } = this.props
    if (invalidID === true) {
      return <Redirect to='/error' />
    } else {
      return (
        <div>
          <div className='card card_color' style={{ margin: "25px" }}>
            <div className='card-header'>{this.renderElement()}</div>
            <div className='card flex-row card_color col-md-12'>
              <img
                src={user.avatarURL}
                alt={`Avatar of ${user.name}`}
                className='card-img-left avatar_card col-md-2'
              />
              <div className='col-md-8'>
                {isLeaderShip ? (
                  <LeaderCard user={user} />
                ) : (
                  <PollCard
                    isQuestionPage={isQuestionPage}
                    question={question}
                    hasAnswered={hasAnswered}
                    answer={answer}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const id = props.id ? props.id : props.match.params.id
  const isLeaderShip = props.isLeaderShip
  const isQuestionPage = props.match
    ? props.match.params.id
      ? true
      : false
    : false
  let user = {}
  if (isLeaderShip) {
    user = props.user
    return {
      user,
      isLeaderShip,
      isQuestionPage,
    }
  } else {
    const question = questions[id]
    if (typeof question === "undefined") {
      return {
        invalidID: true,
      }
    }
    user = users[question.author]
    const hasAnswered = Object.keys(users[authedUser].answers).includes(id)
      ? true
      : false
    return {
      user,
      id,
      isLeaderShip,
      isQuestionPage,
      question,
      hasAnswered,
      answer: hasAnswered ? users[authedUser].answers[id] : "",
    }
  }
}
export default connect(mapStateToProps)(Card)
