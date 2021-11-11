import react from 'react';
import styled from 'styled-components';

interface IProps {
  isActive: boolean;
}

const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primaryColor},
    ${(props) => props.theme.secondaryColor}
  );
`;

const Notch = styled.div<IProps>`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${(props) => (props.isActive ? '26px' : '1px')});
`;

const Toggle = ({ isActive }: IProps) => {
  return (
    <ToggleWrapper>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
};

export default Toggle;
