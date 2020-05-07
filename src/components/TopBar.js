import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Sun, Moon } from "styled-icons/feather";
import { ThemeContext } from "../contexts/ThemeStore";

const Container = styled.div`
  width: "100%";
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
  background-color: ${(props) => props.theme.background};
`;

const icon = css`
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

const StyledSun = styled(Sun)`
  ${icon}
`;

const StyledMoon = styled(Moon)`
  ${icon}
`;

const TopBar = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <Container>
      {theme === "dark" ? (
        <StyledSun size={32} onClick={() => switchTheme("light")} />
      ) : (
        <StyledMoon size={32} onClick={() => switchTheme("dark")} />
      )}
    </Container>
  );
};

export default TopBar;
