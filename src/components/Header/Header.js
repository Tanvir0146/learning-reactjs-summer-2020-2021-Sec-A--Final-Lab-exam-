import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <NavLink class="navbar-brand" href="#">
            Lab Exam
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <Link class="nav-link active" to="/">
                  Home
                </Link> */}
                <Link class="nav-link active" to="/">
                  Home
                </Link>
                
              </li>
              <li><Link class="nav-link active" to="/employees/list">
                  EmployeeList
                </Link></li>
            </ul>
          </div>
          <Link class="btn btn-warning me-2" to="/login">Log In</Link>
          <Link class="btn btn-success" to="/">Register</Link>
          {/* <Link class="btn btn-success" to="/user/add">Add User</Link> */}
          
        </div>
      </nav>
    </div>
  );
};

export default Header;
