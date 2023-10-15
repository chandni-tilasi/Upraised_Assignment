import { Typography } from "@mui/material";

const QuestionText = ({ children }) => {
  return (
    <Typography
      sx={{
        color: "#000",
        fontWeight: 700,
        fontSize: "1.25rem",
        padding: "0rem 1rem",
      }}
    >
      {children}
    </Typography>
  );
};

export default QuestionText;
