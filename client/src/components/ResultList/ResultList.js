import React from 'react';
// import Image from 'react-bootstrap/Image'
// import Table from 'react-bootstrap/Table'



const ResultList = (props) => {
  console.log(props.books.items)
  // if (props.books.length > 0) {
  //   console.log(props.books)
  //   // console.log(props.results[0].id.value)
  //   // console.log(props.results[0].picture.thumbnail)
  //   // console.log(props.results[0].name.first)
  //   // console.log(props.results[0].cell)
  //   // console.log(props.results[0].email)
  //   // console.log(props.results[0])
  // }
  
  return (
  
    <ul>
        {
          props.books.items.map((book) => {
            return (
              <li key={book.id}>
                <div>
                  <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                  <div>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.publishedDate}</p>
                  </div>
                </div>
                <hr />
              </li>
            );
          })
        }
      </ul>
  )
  

}

export default ResultList;