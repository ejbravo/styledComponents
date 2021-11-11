import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from 'themes/';

const GlobalStyle = createGlobalStyle<{
  theme: typeof LightTheme | typeof DarkTheme;
}>`
  body {
    background: ${(props) => props.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color:  ${(props) => props.theme.bodyFontColor};
    font-family: 'Mochiy Pop One', sans-serif;
  }
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () =>
          setTheme((state) => (state.id === 'light' ? DarkTheme : LightTheme)),
      }}
    >
      <GlobalStyle theme={theme} />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
