import React from "react";
import styled from "styled-components";
import BoardImg from "../Atoms/BoardIconImg";
import BoardName from "../Atoms/BoardName";
import BoardRating from "../Atoms/BoardRating";
import BoardQuestion from "../Atoms/BoardQuestion";
import BoardDate from "../Atoms/BoardDate";

function BoardWrap(props) {
  let arr = props.data;

  return (
    <Wrapper>
      <BoardImg src={arr.src} />
      <div>
        <BoardName text={arr.name} />
        <BoardRating text={arr.rating} />
        <BoardQuestion />
        <BoardDate text={arr.date} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default BoardWrap;
