import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  color: ${(props) => props.theme.title};
`;

const Title = () => <Text>THEME SWITCHING WITH STYLED-COMPONENTS</Text>;

export default Title;
