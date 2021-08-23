import React, { Component } from "react"
import { connect } from "react-redux"
import PollResults from "./PollResults"
import Poll from "./Poll"
import PollContent from "./PollContent"

export const OPTION_ONE = "optionOne"
export const OPTION_TWO = "optionTwo"

class PollCard extends Component {
  
  renderElement() {
    const { question, isQuestionPage, hasAnswered, answer } = this.props

    if (isQuestionPage) {
      if (hasAnswered) {
        return <PollResults question={question} answer={answer} />
      } else {
        return <Poll question={question} />
      }
    } else {
      return <PollContent question={question} />
    }
  }

  render() {
    return (
      <div
        className='card-body'
        style={{ textAlign: "left", borderLeft: "1px solid lightGray" }}>
        {this.renderElement()}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    props,
  }
}
export default connect(mapStateToProps)(PollCard)
