import React from "react";
import styled from "styled-components";

function BoardQuestion(props) {
  return <StyledQuestion>구매문의</StyledQuestion>;
}

const StyledQuestion = styled.div`
  font-size: 10pt;
  display: inline-block;
  font-weight: bold;
  padding: 2px 10px;
  border: 0;
  cursor: pointer;
  text-align: center;
  background-color: #dbdbdb;
  border-radius: 5px;
  margin-bottom: 3px;
`;

export default BoardQuestion;
