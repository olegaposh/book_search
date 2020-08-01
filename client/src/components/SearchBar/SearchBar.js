import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import "./SearchBar.css"


const SearchBar = (props) => {
  
  return (
    <MDBCol className="justify-content-center d-flex text-center" md="5">
      <div className="input-group md-form form-sm form-1 pl-0 d-flex justify-content-center text-center">
        <div className="input-group-prepend justify-content-center d-flex text-center">
          
        </div>
        <input className="form-control my-0 py-1" 
                type="text" 
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
  );
}

export default SearchBar;