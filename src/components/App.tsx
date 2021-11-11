import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#81c3d3',
  secondaryColor: '#326f7a',
  warningColor: 'goldenrod',
};

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Mochiy Pop One', sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
