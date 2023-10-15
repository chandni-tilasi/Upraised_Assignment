import { useState } from "react";

import StyledButton from "@/components/Button";
import CircularWithValueLabel from "@/components/CircularWithValueLabel";
import QuestionText from "../components/QuestionText";
import Option from "../components/Option";
import Background from "../components/Background";

import { Box, Stack } from "@mui/material";

const Question = ({
  questions,
  length,
  setScore,
  setAttemped,
  attempted,
  progress,
  setProgress,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  //   console.log("correct: ", correct);

  const nextQuestion = currentQuestion + 1;
  const clickHandler = () => {
    if (attempted === length) {
      return;
    }
    if (nextQuestion < length && isAnswerSelected) {
      setCurrentQuestion(nextQuestion);
      setIsAnswerSelected(false);
    }

    if (isAnswerSelected) {
      setProgress((prev) => prev + 100 / length);
      setAttemped((prev) => prev + 1);
    }

    if (correct) {
      setScore((prev) => prev + 1);
      setCorrect(false);
    }
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
            padding: "0 1rem",
          }}
        >
          <CircularWithValueLabel
            length={length}
            attempted={attempted}
            progress={progress}
          />
          <QuestionText>
            {questions[currentQuestion]?.questionText}
          </QuestionText>
          <Option
            options={questions[currentQuestion]?.answerOptions}
            setCorrect={setCorrect}
            setIsAnswerSelected={setIsAnswerSelected}
          />
          <StyledButton icon={true} width={"100%"} onClick={clickHandler}>
            Next
          </StyledButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Question;
