import styled, { css } from 'styled-components';
interface IProps {
  disabled?: boolean;
  secondary?: boolean;
  large?: boolean;
}

const Button = styled.button`
  color: ${({ secondary }: IProps) => (secondary ? '#326f7a' : 'whitesmoke')};
  background: ${({ secondary }: IProps) => (secondary ? '#81c3d3' : '#326f7a')};
  font-weight: 600;
  letter-spacing: 0.05em;

  ${(props: IProps) =>
    props.large
      ? css`
          padding: 16px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}

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
