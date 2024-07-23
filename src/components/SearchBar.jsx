import { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={() => {
            handleSubmit(inputValue);
          }}
          type="submit"
          className="searchButton"
        >
          Go
        </button>
      </div>
    </div>
  );

  return (
    <div className="search-bar">
      <div>
        <input
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={() => {
          handleSubmit(inputValue);
        }}
      >
        {" "}
        Search{" "}
      </button>
    </div>
  );
};

export default SearchBar;
