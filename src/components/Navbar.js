import React from 'react'
import { Link } from 'react-router-dom'
import "./Add.css"
function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h6 className="navbar-brand"  id="heading">INDANE</h6>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/adduser" className="nav-link" href="#">Add Client</Link>
            </li>
            <li className="nav-item">
                <Link to="/addBooking" className="nav-link" href="#">Add Booking</Link>
            </li>
            <li className="nav-item">
                <Link to="/view" className="nav-link" href="#">View Bookings</Link>
            </li>
            </ul>
        </div>
        </nav>
    </>
  )
}

export default Navbar