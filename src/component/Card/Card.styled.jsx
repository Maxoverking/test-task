import styled from 'styled-components';

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
  border: 2px solid red;
` 

export const CARD = styled.li`
position: relative;
/* display: flex; */
justify-content: center;
flex-direction: column;
max-width: 380px;
height: 460px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
  
  @media (min-width: 420px) and (max-width: 770px) {
    width: 380px;
  }
  @media (min-width: 1279px) {
    width: 380px;
  }
` 
export const GRID_CONTAINER = styled.div`
@media (min-width: 1279px) {
  
     display: flex;
    justify-content: center;
  }
` 
export const DIV = styled.div`
position:relative;
 &::after {
    display:block;
    content: "";
    width: 100%;
    margin-bottom:62px;
    height: 8px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), 
    inset 0px -1.71846px 3.43693px #AE7BE3,
    inset 0px 3.43693px 2.5777px #FBF8FF;
    
  }
` 
export const LI = styled.li`
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
margin-bottom:16px;
color: #EBD8FF;
` 
export const UL = styled.ul`
margin-bottom:26px;
` 
export const BUTTON = styled.button`
width: 196px;
height: 50px;
text-transform: uppercase;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10px;
` 
export const AVATAR_IMG = styled.img`
width: 80px;
height: 80px;
` 
export const DIV_IMG = styled.div`
position: absolute;
overflow:hidden;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
border-radius:50px;
/* border: 8px solid #EBD8FF; */
/* background: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 
inset 0px -2.19582px 4.39163px #AE7BE3,
 inset 0px 4.39163px 3.29372px #FBF8FF; */
 background: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
border: 8px solid #EBD8FF;;
` 