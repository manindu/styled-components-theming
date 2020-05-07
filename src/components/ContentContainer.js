import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 60px);
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

const ContentContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContentContainer;
