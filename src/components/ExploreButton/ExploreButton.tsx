import { Button } from "@mui/material";
import GetMediaQuerySize from "../../services/GetMediaQuerySize";

function ExploreButton() {
  const handleClickScroll = () => {
    // Scroll to the main (search bar & country list) component
    const element = document.getElementById("main");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={handleClickScroll}
      variant="contained"
      size={GetMediaQuerySize()} // Get the appropriate button size based on screen size
      style={{ background: "white", color: "black" }}
      className="explore-button"
    >
      Let's Explore
    </Button>
  );
}

export default ExploreButton;
