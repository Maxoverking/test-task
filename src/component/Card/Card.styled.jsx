import styled from 'styled-components';
import image from '../../images/picture21x.png';

export const CARD_LIST = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 16px 48px;
  margin: 20px;

  @media (min-width: 770px) and (max-width: 1100px) {
    gap: 16px 18px;
  }

  @media (min-width: 420px) and (max-width: 770px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 770px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const CARD = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  max-width: 380px;
  height: 460px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background: url(${image}) no-repeat top 28px center,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -3px 9px 21px 0px #0000003b;
  transition: box-shadow linear 350ms;

  @media (min-width: 420px) and (max-width: 770px) {
    width: 380px;
  }
  @media (min-width: 1279px) {
    width: 380px;
  }
`;
export const GRID_CONTAINER = styled.div`
  @media (min-width: 1279px) {
    display: flex;
    justify-content: center;
  }
`;
export const DIV = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  margin-top: 18px;
  margin-bottom: 62px;
  &::after {
    display: block;
    content: '';
    width: 100%;
    margin-bottom: 62px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;
export const AVATAR_IMG = styled.img`
  position: absolute;
  transform: translate(-50px, -50px);
  border-radius: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 67px;
`;
export const DIV_IMG = styled.div`
  position: absolute;
  overflow: hidden;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;
