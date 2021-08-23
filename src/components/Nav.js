import React from "react"
import { NavLink } from "react-router-dom"
import TopNav from "./TopNav.js"

export default function Nav () {
    return (
      <nav className='nav navbar sticky-top nav-side-color'>
        <div className='container'>
          <div className='navbar-nav-wrapper'>
            <ul className='navbar-nav align-items'>
              <li className='nav-item'>
                <NavLink to='/' exact activeClassName='active' className='nav-link'>
                  {" "}
                  Home{" "}
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/leaderBoard' className='nav-link'>
                  {" "}
                  LeaderBoard{" "}
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/add' className='nav-link'>
                  {" "}
                  New Question{" "}
                </NavLink>
              </li>
            </ul>
            <TopNav />
          </div>
        </div>
      </nav>
    )
  }

