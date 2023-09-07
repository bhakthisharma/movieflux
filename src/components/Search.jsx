import React from "react";
import "./Search.css";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Search = () => {
  const [query, setQuery]=useState("")
  const navigate=useNavigate()
  
  return (
    <input onKeyUp={(e)=>{
      if (e.key=="Enter")
      {
        if(!query) return
        navigate(`/search/${query}`)

      }
    }} onChange={(e)=>setQuery(e.target.value)} value={query} className="search-bar" placeholder="Search for a movie..."></input>
  
    );
    <Footer></Footer>

};

export default Search;
