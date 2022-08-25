import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Carousel from "./components/Carousel";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import axios from "axios";

const App = () => {
  const [searchedText, setSearchedText] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  const searchHandler = (e) => {
    setSearchedText(e.target.value);
  };

  const handleClear = () => {
    setSearchedText("");
  };

  const handleOnSearch = () => {
    const baseURL = process.env.REACT_APP_LOCALHOST_URL;
    const query = JSON.stringify({ author: searchedText });

    axios.get(`${baseURL}/search?query=${query}`).then((res) => {
      setFilteredQuotes(res.data);
    });
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Navigate replace to="/" />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all-quotes" element={<Carousel />} />
        <Route
          exact
          path="/search"
          element={
            <Search
              value={searchedText}
              onChange={searchHandler}
              handleClick={handleOnSearch}
              filteredQuotes={filteredQuotes}
              handleClear={handleClear}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
