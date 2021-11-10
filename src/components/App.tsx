import React, { Fragment } from 'react';

import { Button } from 'components/common';
import { createGlobalStyle } from 'styled-components';

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
    <Fragment>
      <GlobalStyle />
      <h1>App</h1>
      <Button>Primary Button</Button>
      <Button secondary>Secondary Button</Button>
      <Button disabled>Disabled Button</Button>
    </Fragment>
  );
}

export default App;
