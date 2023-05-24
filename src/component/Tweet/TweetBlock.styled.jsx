import styled from 'styled-components';

export const UL = styled.ul`
  margin-bottom: 26px;
`;
export const LI = styled.li`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #ebd8ff;
`;
export const BUTTON = styled.button`
  font-family: inherit;
  width: 196px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  background: ${props => (props.exist ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 36px;
  transition: background-color 250ms, transform 350ms,
    cubic-bezier(0.215, 0.61, 0.355, 1), color 250ms;

  &:hover {
    background: #5cd3a8;
    transform: scale(1.03);
    color: white;
  }
`;
