
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import "./SearchBar.css"


const SearchBar = (props) => {


  return (
    <MDBContainer>
      <MDBRow className="justify-content-center p-2">
        <MDBCol md="6">
          <div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">

            </div>
            
            <input 
              className="form-control m-2 rounded"
              type="search"
              aria-label="Search"
              name="search"
              value={props.search}
              onChange={props.handleInputChange}
            />
            <button
             className="search btn-primary"
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