import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function RightSideBarDutyText(props) {
  return (
    <>
      <GlobalStyle />
      <Text>{props.text}</Text>
      <Text2>{props.percent}</Text2>
    </>
  );
}
const Text = styled.div`
  font-size: 12px;
  color: #999999 ;
  margin-top: 10px;
  display: inline;
`;
const Text2 = styled.div`
  font-size: 12px;
  margin-top: 10px;
  color: #999999;
  display: inline;
  text-align: right;
`;
export default RightSideBarDutyText;
