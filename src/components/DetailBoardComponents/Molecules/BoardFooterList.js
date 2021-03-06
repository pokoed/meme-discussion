import React from "react";
import styled from "styled-components";
import BoardFooter from "./BoardFooter";

function BoardFooterList(props) {
  return (
    <StyledDiv>
      {props.data.map((arr, i) => {
        return <BoardFooter data={arr} key={i} />;
      })}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 840px;
  margin: 0 auto;
  position: relative;
  left: 90px;
  margin-top: 150px;
  margin-bottom: 60px;
  border: 5px solid magenta;
`;

export default BoardFooterList;
