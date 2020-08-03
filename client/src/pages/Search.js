import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar"
import ResultList from "../components/ResultList/ResultList"
import API from "../utils/API"


function Search () {

    const [search, setSearch] = useState("")
    const [books, setBooks] = useState({ items: []})


    const handleInputChange = event => {

        const {value} = event.target;
        setSearch(value);

    }


  
    const SearchSubmit = event => {
        
        event.preventDefault();
        // fetchBooks()
        
        API.searchBooks(search)
          .then(res => setBooks(res.data))
          .catch(err => console.log(err));
          
      };

    // useEffect(() => {

    //   API.searchBooks("harry potter")
    //       .then(res => setBooks(res.data))
    //       .catch(err => console.log(err));
          
    // }, [])
    
    const handleButtonSave = (id) => {
    const saveBook = books.items.filter((book) => book.id === id)[0].volumeInfo;
    console.log("Hey you",saveBook)
    API.saveBook({
      title: saveBook.title,
      author: saveBook.authors,
      description: saveBook.description,
      image: saveBook.imageLinks.thumbnail,
        // ? saveBook.volumeInfo.imageLinks.thumbnail
        // : "https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png",
      link: saveBook.infoLink
    })
      .then((book) => console.log("Successfullly save book", book), alert("Successfullt saved book"))
      .catch((err) => console.log(err));
      
  };

      return (
        <>
        <SearchBar
        SearchSubmit= {SearchSubmit}
        handleInputChange = {handleInputChange}
        search = {search}  />
        <ResultList
        handleButtonSave={handleButtonSave}
        books = {books} />
        
        </>


      )

}


export default Search;
