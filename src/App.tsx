import React from "react";
import { Typography } from "@mui/material";
import { AppContainer, MainContainer } from "./styles/AppStyles";
import Start from "./components/Start/Start";
import Board from "./components/Board/Board";

function App() {
  return (
    <AppContainer>
      <MainContainer>
        {/* <Start /> */}
        <Board />
      </MainContainer>
    </AppContainer>
  );
}

export default App;
