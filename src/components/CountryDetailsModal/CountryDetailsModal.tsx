import React from "react";
import { Box, Fade, Modal, Typography } from "@mui/material";
import { Country, Language } from "../../types/types";
import GetMediaQuerySize from "../../services/GetMediaQuerySize";

/**
 * CountryDetailsModal component displays detailed information about a specific country
 * in a modal dialog.
 *
 * @param {CountryDetailsModalProps} props - TProps for the CountryDetailsModal component.
 * @returns {JSX.Element} - JSX representation of the CountryDetailsModal component.
 */

interface CountryDetailsModalProps {
  open: boolean;
  onClose: () => void;
  country: Country;
}

const CountryDetailsModal: React.FC<CountryDetailsModalProps> = ({
  open,
  onClose,
  country,
}) => {
  // Determine modal dimensions based on media query size
  const mediaQuerySize = GetMediaQuerySize();
  let modalHeight;
  let modalWidth;

  if (mediaQuerySize === "small") {
    modalHeight = 100;
    modalWidth = 200;
  } else if (mediaQuerySize === "medium") {
    modalHeight = 150;
    modalWidth = 300;
  } else {
    modalHeight = 200;
    modalWidth = 400;
  }

  // Create a list of languages for the country
  const languageList = country.languages.map((language: Language) => (
    <li key={language.code}>{language.name}</li>
  ));

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: modalWidth,
            minHeight: modalHeight,
            width: "auto",
            bgcolor: "background.paper",
            borderRadius: "5px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            style={{ marginBottom: "2px" }}
          >
            {country.name} {country.emoji}
          </Typography>
          <Typography style={{ textAlign: "left" }} variant="body1">
            Native:{country.native} <br /> Capital: {country.capital} <br />{" "}
            Currency: {country.currency} <br /> Phone: {country.phone} <br />
            Continent: {country.continent.name}
            <br />
            Languages: <ul className="language-list">{languageList}</ul>
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CountryDetailsModal;
