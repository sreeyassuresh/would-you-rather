import React, { Component } from "react"
import { OPTION_ONE, OPTION_TWO } from "./PollCard"
import { connect } from "react-redux"
import { handleSaveQuestionAnswer } from "../actions/questions"

class Poll extends Component {
  state = {
    selectedOption: OPTION_ONE,
  }

  onRBChange = (event, value) => {
    this.setState(() => ({
      selectedOption: value,
    }))
  }

  onPollSubmit = (e) => {
    e.preventDefault()
    const { dispatch, question } = this.props
    dispatch(
      handleSaveQuestionAnswer({
        qid: question.id,
        answer: this.state.selectedOption,
      })
    )
  }

  render() {
    const { question } = this.props

    return (
      <div>
        <h4 className='card-title h5 h4-sm'>Would You Rather</h4>
        <div className='card-text'>
          <div>
            <label>
              {" "}
              <input
                name='r1'
                type='radio'
                checked={OPTION_ONE === this.state.selectedOption}
                onChange={(e) => this.onRBChange(e, OPTION_ONE)}
              />
            </label>
            <span className='rdbOption'> {question.optionOne.text} </span>
          </div>
          <div>
            <label>
              {" "}
              <input
                name='r1'
                type='radio'
                checked={OPTION_TWO === this.state.selectedOption}
                onChange={(e) => this.onRBChange(e, OPTION_TWO)}
              />
            </label>
            <span className='rdbOption'> {question.optionTwo.text} </span>
          </div>
          <div className='d-grid gap-2' style={{ marginTop: "10px" }}>
            <button
              className='btn btn-info btn-Poll'
              type='button'
              onClick={this.onPollSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    props,
  }
}

export default connect(mapStateToProps)(Poll)
