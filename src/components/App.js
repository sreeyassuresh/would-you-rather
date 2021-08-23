import "../App.css"
import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/shared.js"
import Login from "./Login"
import Home from "./Home"
import Card from "./Card"
import LeaderBoard from "./LeaderBoard"
import Nav from "./Nav"
import Error from "./Error"
import NewQuestion from "./NewQuestion"
import LoadingBar from "react-redux-loading"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props
    if (authedUser === null || authedUser === "") {
      return <Route component={Login} />
    }
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container col-md-12'>
            <Nav />
            {this.props.loading === true ? null : (
              <div className='row app-container'>
                <div className='col-md-2  nav-side-color'></div>
                <div
                  className='col-md-8 App border-top-body'
                  style={{ textAlign: "center" }}>
                  <div className='app-body'>
                    <Route path='/' exact component={Home} />
                    <Route path='/questions/:id' component={Card} />
                    <Route path='/leaderBoard/' component={LeaderBoard} />
                    <Route path='/add/' component={NewQuestion} />
                    <Route path='/error/' component={Error} />
                  </div>
                </div>
                <div className='col-md-2  nav-side-color'></div>
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App)
