import { showLoading, hideLoading } from "react-redux-loading"
import { saveQuestionAnswer, saveQuestion } from "../utils/api"
import { submitUserAnswer, submitUserQuestion } from "./users"

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER"
export const SAVE_QUESTION = "SAVE_QUESTION"

function submitQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  }
}

export function handleSaveQuestion(options) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestion({
      optionOneText: options.optionOne,
      author: authedUser,
      optionTwoText: options.optionTwo,
    })
      .then((question) => {
        dispatch(submitQuestion(question))
        return question
      })
      .then((question) => dispatch(submitUserQuestion(question, authedUser)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn("error in saving question : ", e)
        dispatch(hideLoading())
        alert("There was an error while saving, Please try again")
      })
  }
}

function submitQuestionAnswer({ qid, authedUser, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    qid,
    authedUser,
    answer,
  }
}

export function handleSaveQuestionAnswer({ qid, answer }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestionAnswer({ qid, authedUser, answer })
      .then(() => dispatch(submitQuestionAnswer({ qid, authedUser, answer })))
      .then(() => dispatch(submitUserAnswer({ qid, authedUser, answer })))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn("error in saving answer : ", e)
        dispatch(hideLoading())
        alert("There was an error while saving, Please try again")
      })
  }
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
