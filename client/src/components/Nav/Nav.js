import React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Nav() {
  return (

    <nav class="navbar navbar-expand-md text-dark">
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link text-dark" to="/"><FontAwesomeIcon icon={faBook} size="3x" /></Link>
          </li>

        </ul>
      </div>

      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link class="nav-link text-dark" to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg justify-content-end">
    //   <FontAwesomeIcon icon={faBook} size="2x" />

    //   <a className="navbar-brand text-dark" href="/">
    //     Google Books
    //   </a>
    //   <a className="navbar-brand text-dark" href="/search">
    //     Search
    //   </a>
    //   <a className="navbar-brand text-dark" href="/saved">
    //     Saved
    //   </a>
    // </nav>
  );
}

export default Nav;
