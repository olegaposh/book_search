
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import "./SearchBar.css"


const SearchBar = (props) => {

  

// var searchBox = document.querySelectorAll('.search-box input[type="text"] + span');

// searchBox.forEach((elm) => {
// 	elm.addEventListener('click', () => {
// 		elm.previousElementSibling.value = '';
// 	});
// });


  return (
    <MDBContainer>
      <MDBRow className="justify-content-center p-3">
        <MDBCol md="5">
          <div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">

            </div>
            
            <input className="form-control my-0 py-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              value={props.search}
              onChange={props.handleInputChange}
            />
            <button
              type="submit"
              onClick={props.SearchSubmit}
            >Search</button>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SearchBar;