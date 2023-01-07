import { Button, Typography } from "@mui/material";
import React, { FC } from "react";
import { Card } from "../../styles/App";
import {
  StartButton,
  StartContainer,
  StartHeader,
  StartPlayerType,
  StartPlayers,
} from "../../styles/StartStyles";
import { ButtonStyle } from "../../styles/App";
const Start: FC = () => {
  return (
    <StartContainer>
      <StartHeader>X O</StartHeader>
      <Card>
        <Typography fontSize="lg" variant="h1">
          pick player 1's marks
        </Typography>
        <StartPlayers>
          <StartPlayerType isActive={false}>X</StartPlayerType>
          <StartPlayerType isActive={true}>O</StartPlayerType>
        </StartPlayers>
        <Typography>remember x : go first</Typography>
      </Card>
      <StartButton>
        <ButtonStyle variant="contained" color="secondary">
          new game vs cpu
        </ButtonStyle>
        <ButtonStyle variant="contained" color="primary">
          new game vs player
        </ButtonStyle>
      </StartButton>
    </StartContainer>
  );
};

export default Start;
