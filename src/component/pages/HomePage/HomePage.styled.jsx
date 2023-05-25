import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GiExitDoor } from 'react-icons/gi';

export const BUTTON = styled(NavLink)`
  position: absolute;
  display: flex;
  align-items: center;
  right: 60px;
  font-size: 20px;
  margin-top: 20px;
  border-radius: 20px;
  padding: 6px 10px;
  background: transparent;
  color: #d1af27;
  z-index: 1000;
  @media (min-width: 320px) and (max-width: 610px) {
    /* top: 30px; */
    margin-top: 60px;
  }
`;
export const EntryDoor = styled(GiExitDoor)`
  color: #c0f;

  @media (min-width: 320px) and (max-width: 810px) {
    width: 100px;
    height: 200px;
  }
  @media (min-width: 810px) {
    width: 100px;
    height: 80px;
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
  background: transparent;
  color: #d1af27;
  @media (min-width: 1030px) {
    max-width: 400px;
  }
  @media (max-width: 810px) {
    display: none;
  }
`;
export const DIV_CARD = styled.div`
  position: absolute;
  display: flex;
  bottom: 30px;
  right: 50px;
  @media (max-width: 810px) {
    top: 30px;
    left: 40px;
    flex-direction: column;
  }
  @media (max-width: 405px) {
    visibility: hidden;
  }
`;

export const DIV_SCROLL = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
`;
export const IMG = styled.img`
  @media (max-width: 810px) {
    max-width: 30%;
  }
`;
export const SPAN = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #d1af27;
  @media (max-width: 810px) {
    justify-content: center;
  }
`;
