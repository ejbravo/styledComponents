import styled, { css } from 'styled-components';
interface IProps {
  disabled?: boolean;
  secondary?: boolean;
  large?: boolean;
}

const Button = styled.button`
  color: white;
  background: ${({ secondary }: IProps) => (secondary ? 'black' : '#f8049c')};
  font-weight: bold;
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

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export default Button;
