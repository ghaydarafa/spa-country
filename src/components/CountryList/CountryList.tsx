import React from "react";
import "./CountryList.css";
import { List } from "@mui/material";
import { Country } from "../../types/types";
import CountryListItem from "../CountryListItem/CountryListItem";

/**
 * CountryList component displays a list of countries.
 *
 * @param {Country[]} countries - Array of country objects to be displayed.
 * @returns {JSX.Element} - JSX representation of the CountryList component.
 */

interface CountryListProps {
  countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <div className="list-container">
      <List>
        {countries.map((country: Country) => (
          <CountryListItem key={country.code} country={country} />
        ))}
      </List>
    </div>
  );
};

export default CountryList;
