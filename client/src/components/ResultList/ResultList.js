import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./ResultList.css"


const gridExamplesPage = (props) => {
  return (
    <MDBContainer>
      {

        props.books.items.map((book) => {
          
          return (

            <MDBRow>
              <MDBCol>
                <div class="card mb-3">
                  <div class="row no-gutters">
                    <div class="col-md-3 p-4">
                      <img alt={`${book.volumeInfo.title} book`} src={book.volumeInfo.imageLinks.thumbnail} />
                    </div>
                    <div class="col-md-9">
                      <div class="card-body" key={book.id}>
                        <h5 class="card-title">{book.volumeInfo.title}</h5>
                        <p class="card-text">{book.volumeInfo.description.substring(0, 300)}</p>
                        <p class="card-text"><small class="text-muted">{book.volumeInfo.authors}</small></p>
                        <MDBBtn className="button m-3 float-right" href={book.volumeInfo.infoLink} color="success">ELEGANT</MDBBtn>
                        <MDBBtn className="button m-3 float-right" color="info">SAVE</MDBBtn>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          )
        })
      }
    </MDBContainer>
  );
}

export default gridExamplesPage;


