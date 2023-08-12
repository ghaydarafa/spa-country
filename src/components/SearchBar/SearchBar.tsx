import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";
import { Country } from "../../types/types";

/**
 * Acknowledgement: https://github.com/gitdagray/react_search_filter
 * SearchBar component provides a search input box with filtering functionality for countries name.
 *
 * @param {Country[]} search - Array of country objects to be searched and filtered.
 * @param {React.Dispatch<React.SetStateAction<Country[]>>} setSearchResults - State updater function to set the filtered search results.
 * @returns {JSX.Element} - JSX representation of the SearchBar component.
 */

interface SearchBarProps {
  search: Country[];
  setSearchResults: React.Dispatch<React.SetStateAction<Country[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearchResults }) => {
  // Handles the search input change event and filters the countries based on the search term.
  const handleSearch = (e: { target: { value: string } }) => {
    const searchTerm = e.target.value.toLowerCase();
    const results = search.filter((country: Country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  };

  return (
    <div className="wrap">
      <div className="search-container">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          className="search-box"
          placeholder="Search.."
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
