import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Mochiy Pop One', sans-serif;

    * {
      margin: 0.1em;
    }
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
