import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./ResultList.css"


const ResultList = (props) => {
  return (
    <MDBContainer>
      {

        props.books.items.map((book) => { 
          return ( 
            <MDBRow key={book.id}>
              <MDBCol>
                <div class="card mb-3 border border-dark">
                  <div class="row no-gutters">
                    <div class="col-md-3 p-4">
                      <img alt={`${book.volumeInfo.title} book`} src={book.volumeInfo.imageLinks.thumbnail} />
                    </div>
                    <div class="col-md-9">
                      <div class="card-body">
                        <h5 class="card-title text-center">{book.volumeInfo.title}</h5>
                        <p class="card-text">{`${book.volumeInfo.description}`.substring(0, 300)}</p>
                        <p class="card-text"><small class="text-muted">{book.volumeInfo.authors}</small></p>
                        <MDBBtn 
                          className="button m-3 float-right" 
                          color="success"
                          id={book.id}
                          onClick={() =>props.handleButtonSave(book.id)}
                          >SAVE</MDBBtn>
                        <MDBBtn className="button m-3 float-right" target="_blank" rel="noopener" href={book.volumeInfo.infoLink} color="info">VIEW</MDBBtn>
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

export default ResultList;


