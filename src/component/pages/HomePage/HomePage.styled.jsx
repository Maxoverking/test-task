import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BUTTON = styled(NavLink)`
  position: absolute;
  right: 60px;
  font-size: 20px;
  margin-top: 20px;
  border-radius: 20px;
  padding: 6px 10px;
  background: transparent;
  color: #d1af27;
  @media (min-width: 320px) and (max-width: 610px) {
    margin-top: 200px;
  }
`;
export const P = styled.p`
  left: 60px;
  font-size: 3vh;
  font-weight: 700;
  margin-top: 20px;
  border-radius: 20px;
  letter-spacing: 2px;
  line-height: 137%;
  background: transparent;
  color: rgb(209, 118, 39);
  -webkit-text-stroke: 0.16vh rgb(241, 206, 7);
  @media (min-width: 1028px) {
    margin-top: 60px;
  }
  @media (max-width: 1100px) {
    margin-top: 80px;
  }
  @media (max-width: 690px) {
    visibility: hidden;
  }
`;
export const DIV = styled.div`
  position: absolute;
  display: flex;
  left: 60px;
  font-size: 20px;
  margin-top: 20px;
  height: 500px;
  background: transparent;
  color: #d1af27;
  @media (min-width: 1030px) {
    max-width: 400px;
  }
`;
export const DIV_CARD = styled.div`
  position: absolute;
  display: flex;
  bottom: 30px;
  right: 50px;
`;
