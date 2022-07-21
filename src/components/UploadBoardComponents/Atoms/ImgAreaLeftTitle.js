import React from "react";
import styled from "styled-components";

function ImgAreaLeftTitle(props) {
  return (
    <>
      <Text>{props.text}</Text>
    </>
  );
}

const Text = styled.div`

  height: 32px;
  line-height: 32px;
  padding-left: 11px;
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;

  
`;

export default ImgAreaLeftTitle;
