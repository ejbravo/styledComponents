import styled, { css } from 'styled-components';

interface IProps {
  disabled?: boolean;
  secondary?: boolean;
  large?: boolean;
}

const largeStyles = (large: boolean = false) => {
  if (large) {
    return css`
      padding: 16px;
      border-radius: 5px;
      font-size: 1.5em;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1em;
    `;
  }
};

const Button = styled.button<IProps>`
  color: ${(props) =>
    props.secondary ? props.theme.secondaryColor : 'whitesmoke'};
  background: ${(props) =>
    props.secondary ? props.theme.primaryColor : props.theme.secondaryColor};
  font-weight: 600;
  letter-spacing: 0.05em;
  ${(props) => largeStyles(props.large)};
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  margin-bottom: 0.25em;

  &:disabled {
    background: #b6ccd1;
    color: #334c528f;
  }
`;

export default Button;
