import React from "react";
import styled from "styled-components";

function ShopBoarddSubTitle(props) {
  return <StyledDiv>{props.text}</StyledDiv>;
}

const StyledDiv = styled.div`
  font-size: 12px;
  color: #ABABAB;
`;

export default ShopBoarddSubTitle;
