import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>
      Page does not exist ! Please go to
      <Link to={`/`} style={{color: '#226853'}}>
			<strong>{' '}Home Page</strong>
      </Link>
    </div>
  )
}
