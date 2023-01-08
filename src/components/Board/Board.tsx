import { FC } from "react";
import {
  BoardBody,
  BoardContainer,
  BoardFooter,
  BoardHeader,
} from "../../styles/BoardStyles";

const Board: FC = () => {
  return (
    <BoardContainer>
      <BoardHeader></BoardHeader>
      <BoardBody></BoardBody>
      <BoardFooter></BoardFooter>
    </BoardContainer>
  );
};

export default Board;
