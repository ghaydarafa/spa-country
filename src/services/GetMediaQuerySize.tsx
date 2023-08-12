import { useMediaQuery } from "@mui/material";

function GetMediaQuerySize(): "small" | "medium" | "large" {
  const small = useMediaQuery("(max-width:600px)");
  const medium = useMediaQuery("(max-width:768px)");

  if (small) {
    return "small";
  } else if (medium) {
    return "medium";
  } else {
    return "large";
  }
}

export default GetMediaQuerySize;