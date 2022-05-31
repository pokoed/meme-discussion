import React from "react";
import styled from "styled-components";
import FormText from "../Atoms/FormText";
import FormTitle from "../Atoms/FormTitle";
import LoginForm from "../Atoms/LoginForm";
import FormButton from "../Atoms/FormButton";

function FormBox() {
  return (
    <>
      <StyledDiv>
        <FormTitle />
        <LoginForm />
        <FormText />
        <FormButton />
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  width: 415px;
  margin: 0 auto;
  padding: 5px;
  background-color: #f9f9f9;
  border: 3px solid #cfcfcf;
`;

export default FormBox;