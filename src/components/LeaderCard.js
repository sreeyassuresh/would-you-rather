import React from "react"

export default function LeaderCard(props) {
  return (
    <div>
      <div className='row pollResults '>
        <div className='card leaderCard'>
          <div className='card-body row '>
            <div className='col-md-12'>
              <div className='row'>
                <div className='col-md-10'> Answered Questions </div>
                <div className='col-md-2'> {props.user.answers}</div>
              </div>
              <div className='row'>
                <div className='col-md-10'> Created Questions </div>
                <div className='col-md-2'> {props.user.questions}</div>
              </div>
              <div className='row'>
                <div
                  className='card'
                  style={{
                    padding: "0px",
                    border: "1px solid #103127!important",
                  }}>
                  <div className='card-header leaderCardHeader'>Total</div>
                  <div className='card-body' style={{ backgroundColor: "#ddf3ed" }}>
                    <h4><strong>{props.user.total}</strong></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
