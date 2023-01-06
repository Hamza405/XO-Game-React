import { Button, Typography } from "@mui/material";
import React, { FC } from "react";
import { Card } from "../../styles/App";
import {
  StartButton,
  StartContainer,
  StartHeader,
  StartIconPlayers,
  StartPlayers,
} from "../../styles/StartStyles";

const Start: FC = () => {
  return (
    <StartContainer>
      <StartHeader>X O</StartHeader>
      <Card>
        <Typography fontSize="lg" variant="h1">
          pick player 1's marks
        </Typography>
        <StartPlayers>
          <StartIconPlayers></StartIconPlayers>
          <StartIconPlayers></StartIconPlayers>
        </StartPlayers>
        <Typography>remember x : go first</Typography>
      </Card>
      <StartButton>
        <Button>new game vs cpu</Button>
        <Button>new game vs player</Button>
      </StartButton>
    </StartContainer>
  );
};

export default Start;
