import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Header = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Header;

// import React from "react";
// import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

// const Header = () => {
//   return (
//     <MDBContainer className="mt-5 text-center">
//       <MDBRow>
//         <MDBCol>
//           <MDBJumbotron>
//             <h2 className="h1 display-3">Hello, world!</h2>
//             <p className="lead">
//               This is a simple hero unit, a simple Jumbotron-style component for
//               calling extra attention to featured content or information.
//             </p>
//             <hr className="my-2" />
//             <p>
//               It uses utility classes for typgraphy and spacing to space content out
//               within the larger container.
//             </p>
//             <p className="lead">
//               <MDBBtn color="primary">Learn More</MDBBtn>
//             </p>
//           </MDBJumbotron>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   )
// }

// export default Header;