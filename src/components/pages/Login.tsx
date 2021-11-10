import React, {
  useState,
  useEffect,
  Fragment,
  ChangeEvent,
  MouseEvent,
} from 'react';
import { PageLayout, Input, PasswordInput, Button } from 'components/common';
import styled from 'styled-components';

type ClickEvent = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #cfcfcf;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let timeout: NodeJS.Timeout;

  useEffect(() => {
    return () => timeout && clearTimeout(timeout);
  }, []);

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

  const submitHandler = (action: string) => {
    console.log(action);
    setIsLoading(true);
    timeout = setTimeout(
      () => {
        setIsLoading(false);
        setUsername('');
        setPassword('');
      },
      action === 'login' ? 2000 : 3000
    );
  };

  const loginHandler = (event: ClickEvent) => {
    event.preventDefault();
    submitHandler('login');
  };

  const registerHandler = (event: ClickEvent) => {
    event.preventDefault();
    submitHandler('register');
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
        <PasswordInput
          value={password}
          onChange={(event) => passwordHandler(event)}
        />
        {isLoading ? (
          <Button large disabled>
            Loading...
          </Button>
        ) : (
          <Fragment>
            <Button
              large
              type="submit"
              name="login"
              onClick={(event) => loginHandler(event)}
            >
              Login
            </Button>
            <div className="alt-text">or</div>
            <Button
              secondary
              type="submit"
              name="register"
              onClick={(event) => registerHandler(event)}
            >
              Register
            </Button>
          </Fragment>
        )}
      </Form>
    </PageLayout>
  );
};

export default Login;
