import React from "react";
import { Card } from "react-bootstrap";
const Navbar = function (props) {
  return (

      <nav className="navbar mb-5 navbar-expand-lg container">
        <div className="container-fluid container">
          <a className="navbar-brand fs-4" href="#">
            TodoAPP
          </a>
          <div className="navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fs-5" onClick={props.showModalHandler} aria-current="page" href="#">
                  Add
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  );
};

export default Navbar;
