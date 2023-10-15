import Logo from "@/components/Logo";
import StyledButton from "@/components/Button";
import Circle from "@/components/Circle";

import { Box, Stack } from "@mui/material";

const QuizStart = ({ setQuizStart }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        background:
          "linear-gradient(180deg, rgba(175, 156, 243, 0.00) 7.92%, #AF9CF3 86.48%)",
        backgroundBlendMode: "multiply",
      }}
    >
      <Stack
        minWidth={"40%"}
        height={"90%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ padding: "0 2rem"}}
      >
        <Logo />
        <Circle />
        <StyledButton
          icon={false}
          width={"100%"}
          onClick={() => setQuizStart(true)}
        >
          Start
        </StyledButton>
      </Stack>
    </Box>
  );
};

export default QuizStart;
