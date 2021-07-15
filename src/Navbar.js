import React from 'react'
import "./Home.css";
import {
  Link
} from "react-router-dom";
export const Navbar = () => {
    return (
        <nav className=" navbar navbar-expand-lg navbar-dark bg-dark text-center">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/aksh.at/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/aksh.at/about">About</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/aksh.at/work">My Work</Link>
        </li>
      </ul>
      <div className="d-flex">
        <Link className="btn btn-secondary" to="/aksh.at/contact">Contact</Link>
      </div>
    </div>
  </div>
</nav>
    )
}
