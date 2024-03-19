import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`;

export const Header = styled.header`
   .logo1{
      border: none;
      padding-left: 25px;
      height: 5vh;
   }
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    height: 8vh;
    

 section {
    display: flex;
    align-items: center;
    border: none;
    padding-right: 30px;
 }

 div {
    display: flex;
    align-items: center;
    padding: 12px;

 }

 .pecaqui {
    background-color: #FFC72C;
    height: 50px;
    border-radius: 10px;
    
 }

 div h3 {
    font-size: 0.8rem;

 }

`;