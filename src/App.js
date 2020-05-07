import React from "react";
import ContentContainer from "./components/ContentContainer";
import Title from "./components/Title";
import TopBar from "./components/TopBar";
import Theme from "./Theme";
import { ThemeStore } from "./contexts/ThemeStore";

const App = () => {
  return (
    <ThemeStore>
      <Theme>
        <TopBar />
        <ContentContainer>
          <Title>THEME SWITCHING WITH STYLED-COMPONENTS</Title>
        </ContentContainer>
      </Theme>
    </ThemeStore>
  );
};

export default App;
