import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Slide,
} from "@mui/material";
import { Country } from "../../types/types";
import "./CountryListItem.css";
import GetMediaQuerySize from "../../services/GetMediaQuerySize";
import CountryDetailsModal from "../CountryDetailsModal/CountryDetailsModal";

/**
 * CountryListItem component displays basic country information in a card format.
 *
 * @param {CountryListItemProps} props - Props for the CountryListItem component.
 * @returns {JSX.Element} - JSX representation of the CountryListItem component.
 */

interface CountryListItemProps {
  country: Country;
}

function CardWidth() {
  const size = GetMediaQuerySize();

  if (size === "small") {
    return 300;
  } else if (size === "medium") {
    return 400;
  } else {
    return 500;
  }
}

const CountryListItem: React.FC<CountryListItemProps> = ({ country }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="country-card">
      <Card
        variant="outlined"
        style={{
          marginTop: "15px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          height: "200px",
          width: CardWidth(),
          transitionProperty: "transform 250ms",
        }}
      >
        <CardHeader
          style={{ textAlign: "left", paddingBottom: "1px" }}
          title={country.name}
          subheader={country.emoji}
        />
        <CardContent style={{ paddingTop: "1px" }}>
          <Typography style={{ textAlign: "left" }} variant="body1">
            Capital: {country.capital} <br /> Currency: {country.currency}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpenModal} style={{ color: "#097533" }}>
            Learn more
          </Button>
          <CountryDetailsModal
            open={isModalOpen}
            onClose={handleCloseModal}
            country={country}
          />
        </CardActions>
      </Card>
    </div>
  );
};

export default CountryListItem;
