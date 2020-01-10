import React from "react";

import "./search-box.style.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input type="search" placeholder={placeholder} onChange={handleChange} />
  );
};

export default SearchBox;
