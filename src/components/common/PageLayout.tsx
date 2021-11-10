import React, { Fragment } from 'react';
import styled from 'styled-components';

import Header from './Header';

interface IProps {
  children: React.ReactNode;
}

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: 'Open Sans';

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Mochiy Pop One', sans-serif;
  }
`;

const PageLayout = ({ children }: IProps) => {
  return (
    <Fragment>
      <Header />
      <Content>{children}</Content>
    </Fragment>
  );
};

export default PageLayout;
