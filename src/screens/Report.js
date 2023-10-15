import StyledButton from "@/components/Button";

import { Box, Stack, Typography } from "@mui/material";
import Background from "../components/Background";

const Report = ({
  score,
  length,
  setQuizStart,
  setScore,
  setAttemped,
  setProgress,
}) => {
  const startAgainHandler = () => {
    setQuizStart(false);
    setScore(0);
    setAttemped(0);
    setProgress(0);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100%",
        background: "#AF9CF3",
        backgroundBlendMode: "multiply",
      }}
    >
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
          borderRadius: "2rem 2rem 0  0",
          backgroundColor: "#FFFFFF",
          padding: "0 0 1rem 0",
        }}
      >
        <Background />
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          minWidth={"40%"}
          height={"100%"}
          sx={{
            padding: "1rem 1rem",
          }}
        >
          <Typography component={"div"} variant="h4" sx={{ fontWeight: 700 }}>
            Your result
          </Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="120"
            viewBox="0 0 500 260"
            fill="none"
          >
            <path
              d="M490 250C490 117.452 382.548 10 250 10C117.452 10 10 117.452 10 250"
              stroke="url(#paint0_linear_86_5)"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_86_5"
                x1="490"
                y1="10"
                x2="10"
                y2="10"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#44B77B" />
                <stop offset="0.479043" stopColor="#FFD033" />
                <stop offset="1" stopColor="#FF3B3F" />
              </linearGradient>
            </defs>
          </svg>
          <Box
            sx={{
              width: "200px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              component={"div"}
              variant="h2"
              sx={{ fontWeight: 900, color: "black" }}
            >{`${((score / length) * 100).toFixed(1)}%`}</Typography>
          </Box>
          <Box
            sx={{
              height: "10%",
              width: "100%",
              backgroundColor: "#bbf7d0",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              padding: "0 1rem",
            }}
          >
            <Box
              sx={{
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "#44B77B",
              }}
            ></Box>
            <Typography
              component={"div"}
              sx={{
                marginLeft: "0.75rem",
                fontWeight: 700,
                display: "flex",
                gap: 2,
              }}
            >
              {score}
              <Typography
                component={"div"}
                sx={{ fontWeight: 700, color: "gray" }}
              >
                Correct
              </Typography>
            </Typography>
          </Box>

          {/* ............... */}
          <Box
            sx={{
              height: "10%",
              width: "100%",
              backgroundColor: "#fecaca",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              padding: "0 1rem",
            }}
          >
            <Box
              sx={{
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "#FF3B3F",
              }}
            ></Box>
            <Typography
              sx={{
                marginLeft: "0.75rem",
                fontWeight: 700,
                display: "flex",
                gap: 2,
              }}
            >
              {length - score}
              <Typography sx={{ fontWeight: 700, color: "gray" }}>
                Incorrect
              </Typography>
            </Typography>
          </Box>
          <StyledButton icon={false} width={"100%"} onClick={startAgainHandler}>
            Start Again
          </StyledButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Report;
