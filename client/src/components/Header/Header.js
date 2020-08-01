import React from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const CardExample = () => {
  return (
    
  //   <div class="jumbotron jumbotron-fluid text-center text-light bg-dark">
  //   <div class="container">
  //     <h1 class="display-4">Google Book Search</h1>
  //     <p class="lead">Find and save all your favorite books.</p>
  //   </div>
  // </div>

 <MDBContainer className="mt-5 text-center">
<MDBRow>
  <MDBCol>
    <MDBJumbotron>
      <h2 className="h1 display-3">Hello, world!</h2>
      <p className="lead">
        This is a simple hero unit, a simple Jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-2" />
      <p>
        It uses utility classes for typgraphy and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <MDBBtn color="primary">Learn More</MDBBtn>
      </p>
    </MDBJumbotron>
  </MDBCol>
</MDBRow>
</MDBContainer> 
    
  )
}

export default CardExample;

