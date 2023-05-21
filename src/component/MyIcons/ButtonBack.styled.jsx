import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const circleAnimation = keyframes`
  0% {
    width: 48px;
  }
  100% {
    width: 100%;
  }
`;

const arrowAnimation = keyframes`
  0% {
    transform: translate(0, 0);
   
    background: none;
  }
  0% {
     transform: translate(0, 0);
    background: #fff;
  }
`;

const buttonTextAnimation = keyframes`
  0% {
    
    color: #fff;
  }
  100% {
    color: #f05502;
  }
`;

export const Button = styled(Link)`
  position: absolute;
  display: inline-block;
  outline: none;
  top: 56px;
  left: 20px;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  font-size: inherit;
  font-family: inherit;

  &.back {
    width: 120px;
    height: auto;
  }

  .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 48px;
    height: 48px;
    background: #282936;
    border-radius: 26px;
  }

  .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 10px;
    height:2px;
    background: none;
    &::before {
      position: absolute;
      content: "";
      top: -4.64px;
      right: -22px;
      width: 10px;
      height: 10px;
      border-top:2px solid #fff;
      border-right:2px solid #fff;
      transform: rotate(225deg);
    }
  }

  .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: -5px;
    right: 0;
    bottom: 0;
    padding: 12px 0;
    margin: 0 0 0 29.6px;
    color: #ffffff;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  &:hover {
    .circle {
      animation: ${circleAnimation} 0.45s forwards;
    }

    .circle .icon.arrow {
      animation: ${arrowAnimation} 0.45s forwards;
    }

    .button-text {
      animation: ${buttonTextAnimation} 0.45s forwards;
    }
  }
`;
