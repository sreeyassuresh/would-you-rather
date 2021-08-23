import React, { Component } from "react"
import { connect } from "react-redux"
import { handleSaveQuestion } from "../actions/questions"

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  }

  onQuestionSubmit = (e) => {
    e.preventDefault()
    const { dispatch, history } = this.props
    dispatch(
      handleSaveQuestion({
        optionOne: this.state.optionOne,
        optionTwo: this.state.optionTwo,
      })
    )
    
     this.setState({
       optionOne: "",
       optionTwo: "",
    })
    history.push("/");
  }

  onTextChange = (e) => {
    const text = e.target.value
    const name = e.target.name
    this.setState({
      [name]: text,
    })
  }
  render() {
    return (
      <div className='card text-center card_color'>
        <div className='card-header'>
          <strong>
            <h4>Create New Question</h4>
          </strong>
        </div>
        <div className='card-body'>
          <p className='card-text'>Complete the question</p>
          <h5 className='card-title'>Would You Rather</h5>
          <div className='row div-spacing'>
            <input
              className='form-control'
              name='optionOne'
              value={this.state.optionOne}
              onChange={this.onTextChange}
              type='text'
              placeholder=' Enter Option One Text Here'
            />
          </div>
          <div className='row div-spacing'>
            <p className='card-text'>OR</p>
          </div>
          <div className='row div-spacing'>
            <input
              className='form-control'
              name='optionTwo'
              value={this.state.optionTwo}
              onChange={this.onTextChange}
              type='text'
              placeholder=' Enter Option Two Text Here'
            />
          </div>
          <button
            className='btn btn-info btn-Poll'
            style={{ width: "100%" }}
            type='button'
            onClick={this.onQuestionSubmit}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  }
}
export default connect(mapStateToProps)(NewQuestion)
