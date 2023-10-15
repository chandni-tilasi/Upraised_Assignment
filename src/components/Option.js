import { useState } from "react";
import { Box, Radio, RadioGroup, FormControlLabel, Stack } from "@mui/material";

const Option = ({ options, setCorrect, setIsAnswerSelected }) => {
  const [value, setValue] = useState("");

  // console.log("value: ", value);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setIsAnswerSelected(true);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "1rem",
        width: "100%",
        padding: "0.5rem 1rem",
      }}
    >
      <RadioGroup
        aria-labelledby="demo-error-radios"
        name="quiz"
        value={value}
        onChange={handleRadioChange}
        sx={{ width: "100%" }}
      >
        <Stack spacing={2}>
          {options?.map((item, index) => {
            return (
              <FormControlLabel
                onClick={() => setCorrect(item.isCorrect)}
                key={index}
                sx={{
                  backgroundColor: "#F3F4FA",
                  width: "100%",
                  borderRadius: "0.5rem",
                }}
                value={item.answerText}
                control={<Radio />}
                label={item.answerText}
              />
            );
          })}
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default Option;
