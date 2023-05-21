import styled from 'styled-components';

const lightBackground = `
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(88, 101, 242, 1) 0%,
    rgba(255, 255, 255, 0) 80%,
    rgba(255, 255, 255, 0) 100%
  );
`
const lightActive = `
    position: absolute;
  top: -80px;
  left: -5px;
  width: 50px;
  height: 82px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: transparent;
`
const displayFlexJustyfyCenter = `
display: flex;
justify-content: center;
`

export const LightButtonWrap = styled.div`
  ${displayFlexJustyfyCenter}
  gap: 30px;
`

export const LightButtonContainer = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  align-items: flex-end;

`

export const ButtonHolder = styled.div`
 ${displayFlexJustyfyCenter}
  flex-direction: column;
  align-items: center;
  height: 40px;
  width: 40px;
  background-color: #0a0a0a;
  border-radius: 5px;
  color: #0f0f0f;
  font-weight: 700;
  transition: 300ms;
  outline: #0f0f0f 2px solid;
  outline-offset: 20;
`

export const ButtonIcon = styled.svg`
  height: 50px;
  fill: #0f0f0f;
  transition: 300ms;
`

export const LightHolder = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 0px;
  width: 100px;
`

export const Dot = styled.div`
  position: absolute;
  top: -80px;
  left: 15px;
  width: 10px;
  height: 10px;
  background-color: #0a0a0a;
  border-radius: 10px;
  z-index: 2;
`

export const Light = styled.div`
  ${lightActive}
`
export const LightActive = styled.div`
  ${lightActive}
`
export const LightButton = styled.button`
  &:hover ${ButtonIcon} {
    fill: rgba(88, 101, 242, 1);
  }

  &:hover ${ButtonHolder} {
    color: rgba(88, 101, 242, 1);
    outline: rgba(88, 101, 242, 1) 2px solid;
    outline-offset: 2px;
  }

  &:hover ${Light} {
    ${lightBackground}
  }
  & ${LightActive} {
    ${lightBackground}
  }
`
