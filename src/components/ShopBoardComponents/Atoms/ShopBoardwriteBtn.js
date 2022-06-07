import React from "react";
import styled from "styled-components";
import svg from "../../../images/Group 343.svg";
function ShopBoardwriteBtn() {
  return (
    <>
      <Btn>
        <Image src={svg} />
      </Btn>
    </>
  );
}
const Btn = styled.button`
  cursor: pointer;
  display: inline-block;
  border: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0);
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
`;
export default ShopBoardwriteBtn;
