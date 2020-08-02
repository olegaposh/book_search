import React from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Header = () => {
  return (
    
  //   <div class="jumbotron jumbotron-fluid text-center text-light bg-dark">
  //   <div class="container">
  //     <h1 class="display-4">Google Book Search</h1>
  //     <p class="lead">Find and save all your favorite books.</p>
  //   </div>
  // </div>

 <MDBContainer className="text-center">
<MDBRow>
  <MDBCol>
    <MDBJumbotron className="bg-dark text-light">
      <h2 className="h1 display-2">Google Book Search</h2>
      <br></br>
      <p className="lead">
        Search and save your favorite books.
      </p>
      
    </MDBJumbotron>
  </MDBCol>
</MDBRow>
</MDBContainer> 
    
  )
}

export default Header;

