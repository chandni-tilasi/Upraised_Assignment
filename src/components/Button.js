import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledButton = ({ children, width, onClick, icon }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      endIcon={icon && <ArrowForwardIcon />}
      sx={{
        backgroundColor: "#FF3B3F",
        borderRadius: "1rem",
        textTransform: "capitalize",
        fontWeight: 700,
        padding: "0.5rem 0",
        width: width,
        "&:hover": {
          backgroundColor: "#FF3B3F",
          opacity: 0.7,
        },
      }}
    >
      <Typography sx={{ width: "80%", fontWeight: 700 }}>{children}</Typography>
    </Button>
  );
};

export default StyledButton;
