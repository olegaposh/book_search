import axios from "axios";

export default {
  // Google Books API call using user's search query
  searchBooks: function(query) {
    return axios.get("/api/books", { params: {q: query} });
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books/savedbooks");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books/newbook", bookData);
  }
};
