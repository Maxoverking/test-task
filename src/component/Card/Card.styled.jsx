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
export const H3 = styled.h3`
  border: 2px solid red;
  padding: 20px;
  color: rgb(236, 9, 194);
    
` 
export const GRID_CONTAINER = styled.div`
@media (min-width: 1279px) {
     display: flex;
    justify-content: center;
  }
` 

