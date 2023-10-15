import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCircularProgress: {
      styleOverrides: {
        circle: {
          strokeLinecap: "round",
        },
      },
    },
  },
});

function CircularProgressWithLabel(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "150px",
          width: "150px",
          backgroundColor: "white",
          borderRadius: "50%",
          position: "relative",
          top: "-70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <CircularProgress
            variant="determinate"
            sx={{
              color: (theme) =>
                theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
            }}
            size={120}
            thickness={4}
            {...props}
            value={100}
          />
          <CircularProgress
            sx={{
              color: "green",
              position: "absolute",
              left: 0,
            }}
            variant="determinate"
            size={120}
            {...props}
          />
          <Box
            sx={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute",
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              color="text.secondary"
              sx={{ fontWeight: 700, fontStyle: "italic" }}
            >
              {`${props.attempted}`}
            </Typography>
            <Typography
              component="div"
              color="text.secondary"
              sx={{ fontStyle: "italic" }}
            >
              {`/${props.length}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function CircularWithValueLabel({
  length,
  attempted,
  progress,
}) {
  return (
    <CircularProgressWithLabel
      value={progress}
      length={length}
      attempted={attempted}
    />
  );
}
