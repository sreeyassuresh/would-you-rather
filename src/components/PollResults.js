import React, { Component } from "react"
import { OPTION_ONE, OPTION_TWO } from "./PollCard"
import vote from "../utils/images/vote.jpeg"

class PollResults extends Component {
  render() {
    const { question, answer } = this.props
    const optionOneCount = question.optionOne.votes.length
    const optionTwoCount = question.optionTwo.votes.length
    const total = optionOneCount + optionTwoCount
    const optionOnePercentage = ((optionOneCount * 100) / total).toFixed() + "%"
    const optionTwoPercentage = ((optionTwoCount * 100) / total).toFixed() + "%"

    return (
      <div className='card-text'>
        <div>
          <strong>
            <h4>Results</h4>
          </strong>
        </div>
        <div className='row pollResults'>
          <div
            className='card'
            style={{ backgroundColor: answer === OPTION_ONE ? "#a5e1cf" : "" }}>
            <div className='card-body row'>
              <div className='col-md-10'>
                <h5 className='card-title'>
                  Would you rather {question.optionOne.text}
                </h5>
                <div className='progress'>
                  <div
                    className='progress-bar .progress-bar-animated progress-bar-striped'
                    role='progressbar'
                    style={{
                      width: optionOnePercentage,
                      backgroundColor: "#2a8167",
                    }}
                    aria-valuemin='0'
                    aria-valuemax='100'>
                    {optionOnePercentage}
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  {optionOneCount} out of {total} votes
                </div>
              </div>
              <div className='col-md-2'>
                {answer === OPTION_ONE ? (
                  <img src={vote} alt='' className='card-img-right vote_card' />
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className='row pollResults' style={{ marginTop: "30px" }}>
          <div
            className='card'
            style={{ backgroundColor: answer === OPTION_TWO ? "#a5e1cf" : "" }}>
            <div className='card-body row'>
              <div className='col-md-10'>
                <h5 className='card-title'>
                  Would you rather {question.optionTwo.text}
                </h5>
                <div className='progress'>
                  <div
                    className='progress-bar .progress-bar-animated progress-bar-striped'
                    role='progressbar'
                    style={{
                      width: optionTwoPercentage,
                      backgroundColor: "#2a8167",
                    }}
                    aria-valuemin='0'
                    aria-valuemax='100'>
                    {optionTwoPercentage}
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  {optionTwoCount} out of {total} votes
                </div>
              </div>
              <div className='col-md-2'>
                {answer === OPTION_TWO ? (
                  <img src={vote} alt='' className='card-img-right vote_card' />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PollResults
