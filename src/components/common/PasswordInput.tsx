import React, { Fragment, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Input from './Input';

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInputWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
    margin-left: 4px;
    font-size: small;
  }
`;

const PasswordInputStyled = styled(Input).attrs(({ value }) => ({
  type: 'password',
  placeholder: 'password',
  value,
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`;

const PasswordInput = ({ value, onChange }: IProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Fragment>
      <PasswordInputWrapper>
        <PasswordInputStyled value={value} onChange={onChange} />
        <ToggleButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </ToggleButton>
      </PasswordInputWrapper>

      <div>{showPassword ? value : ''}</div>
    </Fragment>
  );
};

export default PasswordInput;
