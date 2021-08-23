import React from "react"

export default function PollContent(props) {
  return (
    <div>
      <h4 className='card-title h5 h4-sm'>Would You Rather</h4>
      <p className='card-text'>{props.question.optionOne.text} ...</p>
    </div>
  )
}
