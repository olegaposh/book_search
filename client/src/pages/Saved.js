import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Favorites from "../components/Favorites/Favorites"

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  },[books])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  const deleteBook = (id) => {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

    return (
      <Favorites 
      savedBooks={books}
      deleteBook={deleteBook}
      />
    );
  }


export default Books;
