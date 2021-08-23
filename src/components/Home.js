import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Card from "./Card.js"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

class Home extends Component {
  
  render() {
    const { unansweredQuestions, answeredQuestions } = this.props
    const isLeaderShipPage = false

    return (
      <div className='col-md-12' style={{ border: "1px solid lightgray" }}>
        <Tabs>
          <TabList>
            <Tab>Unanswered Questions</Tab>
            <Tab>Answered Questions</Tab>
          </TabList>

          <TabPanel>
            {unansweredQuestions.map((id) => {
              return (
              <div key={id}>
                <Link to={`/questions/${id}`} className='' >
                  <Card  id={id} isLeaderShip={isLeaderShipPage} />
                </Link>
               </div> 
              )
            })}
          </TabPanel>
          <TabPanel>
        
            {answeredQuestions.map((id) => {
              return (
              <div key={id}>
                <Link to={`/questions/${id}`} className='question'>
                  <Card id={id} />
                </Link>
                </div>
              )
            })}
            
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const values = Object.keys(users[authedUser].answers)
  const answeredQuestions = Object.keys(questions)
    .filter((v) => values.includes(v))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  const unansweredQuestions = Object.keys(questions)
    .filter((v) => !answeredQuestions.includes(v))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  return {
    authedUser,
    answeredQuestions,
    unansweredQuestions,
  }
}
export default connect(mapStateToProps)(Home)
