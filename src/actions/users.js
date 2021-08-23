export const RECEIVE_USERS = "RECEIVE_USERS"
export const SAVE_ANSWER = "SAVE_USER_ANSWER"
export const SAVE_USER_QUESTION = "SAVE_USER_QUESTION"

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function submitUserAnswer({ qid, authedUser, answer }) {
  return {
    type: SAVE_ANSWER,
    qid,
    authedUser,
    answer,
  }
}

export function submitUserQuestion({ id }, authedUser ) {
  return {
    type: SAVE_USER_QUESTION,
    id,
    authedUser,
  }
}
