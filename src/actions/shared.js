import { getAll } from "../utils/api"
import { receiveQuestions } from "../actions/questions"
import { receiveUsers } from "../actions/users"
import { showLoading, hideLoading } from "react-redux-loading"

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getAll().then(({users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(hideLoading())
    })
  }
}

