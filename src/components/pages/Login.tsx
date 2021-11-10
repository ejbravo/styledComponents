import React, { useState, ChangeEvent } from 'react';
import { PageLayout, Input } from 'components/common';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #cfcfcf;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

interface IProps {}

const Login = ({}: IProps) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const usernameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setUsername(value);
  };
  const passwordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setPassword(value);
  };

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          name="username"
          placeholder="username"
          value={username}
          type="text"
          onChange={(event) => usernameHandler(event)}
        />
        <Input
          name="password"
          placeholder="password"
          value={password}
          type="password"
          onChange={(event) => passwordHandler(event)}
        />
      </Form>
    </PageLayout>
  );
};

export default Login;
