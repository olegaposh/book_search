import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";



const Favorites = (props) => {
    console.log(props)
  return (
      
    <MDBContainer>
      {
        props.savedBooks.map((book) => { 
          return ( 
            <MDBRow key={book._id}>
              <MDBCol>
                  
                <div class="card mb-3 border border-dark">
                  <div class="row no-gutters">
                    <div class="col-md-3 p-4">
                      <img alt={`${book.title} book`} src={book.image} />
                    </div>
                    <div class="col-md-9">
                      <div class="card-body">
                        <h5 class="card-title text-center">{book.title}</h5>
                        <p class="card-text">{`${book.description}`.substring(0, 300)}</p>
                        <p class="card-text"><small class="text-muted">{book.author}</small></p>

                        
                        <MDBBtn 
                          className="button m-3 float-right"
                           color="danger"
                           onClick={()=> props.deleteBook(book._id)}
                          >DELETE</MDBBtn>

                          
                        <MDBBtn 
                        className="button m-3 float-right" 
                        target="_blank" 
                        rel="noopener" 
                        href={book.link} 
                        color="info">VIEW
                        </MDBBtn>
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

export default Favorites;


