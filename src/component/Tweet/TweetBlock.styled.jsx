import styled from 'styled-components';

export const UL = styled.ul`
margin-bottom:26px;
` 

export const LI = styled.li`
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
margin-bottom:16px;
color: #EBD8FF;
` 

export const BUTTON = styled.button`
width: 196px;
height: 50px;
text-transform: uppercase;
background: ${props => props.exist ? "#5CD3A8": "#EBD8FF" };
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10px;
` 