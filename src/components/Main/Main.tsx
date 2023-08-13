import { useState } from "react";
import "./Main.css";
import { gql, useQuery } from "@apollo/client";
import client from "../../services/apolloClient";
import { Country } from "../../types/types";
import SearchBar from "../SearchBar/SearchBar";
import CountryList from "../CountryList/CountryList";

// Acknowledgement: https://github.com/trevorblades/countries/tree/main/examples/react

const ALL_COUNTRIES = gql`
  {
    countries {
      name
      code
      emoji
      emojiU
      native
      capital
      currency
      phone
      continent {
        code
        name
      }
      languages {
        name
      }
    }
  }
`;

function Main() {
  const { loading, error, data } = useQuery(ALL_COUNTRIES, {
    client,
  });

  const [searchResults, setSearchResults] = useState<Country[]>([]);
  
  if (loading) {
    return (
      <div className="container">
        <div className="loader"></div>
      </div>
    );
  } else if (error) {
    return (
      <div className="container">
        <p>{error.message}</p>
      </div>
    );
  }
  
  const countries = searchResults.length > 0 ? searchResults : data.countries;
  return (
    <div className="main">
      <SearchBar search={data.countries} setSearchResults={setSearchResults} />
      <CountryList countries={countries} />
    </div>
  );
}

export default Main;
