import styled from 'styled-components';

export const CONTAINER = styled.div`
  margin-bottom: 50px;
  text-align: center;
`;
export const LOADER = styled.div`
  display: flex;
  justify-content: center;
`;
export const BUTTON = styled.button`
  width: 110px;
  height: 40px;
  text-transform: uppercase;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: background-color 250ms, transform 350ms,
    cubic-bezier(0.215, 0.61, 0.355, 1), color 250ms;

  &:hover {
    background: #5cd3a8;
    transform: scale(1.03);
    color: white;
  }
`;
