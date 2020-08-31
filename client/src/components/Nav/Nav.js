import React from "react";
import { faBook, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Nav() {
  return (

    <nav class="navbar">
      <div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/"><FontAwesomeIcon icon={faBook} size="3x" /></Link>
          </li>

        </ul>
      </div>

      <div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link class="nav-link text-danger" to="/favorites"><FontAwesomeIcon icon={faHeart} size="3x" /></Link>
            <i class="far fa-heart"></i>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Nav;
