import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar"
import ResultList from "../components/ResultList/ResultList"
import API from "../utils/API"
import axios from "axios";

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
        API.getBooks(search)
          .then(res => setSearch(res.data))
          .catch(err => console.log(err));
      };
    // useEffect(() => {

    //   fetchBooks()
    // }, [])

    // const fetchBooks = async () => {
    //   // const proxyurl = "https://cors-anywhere.herokuapp.com/"
    //   // const KEY = "&key=AIzaSyBBDI72URfG1rPc9K9I78POLK_XGoh_nQ0";
    //   const URL = "https://www.googleapis.com/books/v1/volumes?q=";
    //   let result = await axios.get(URL + search);
    //   setBooks(result.data)
    //   console.log(result.data);
    // }
    

      return (
        <>
        <SearchBar
        SearchSubmit= {SearchSubmit}
        handleInputChange = {handleInputChange}
        search = {search}  />
        <ResultList
        books = {books} />
        
        </>


      )

}


export default Search;
