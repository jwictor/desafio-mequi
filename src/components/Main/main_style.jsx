import styled from "styled-components";


export const Section = styled.section`
    border: none;
    background-color: #FFC72C ;
    height: 50vh;
    
    h1{
        color: white;
    }

    span{
        color: red;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40vh;
        border: none;
    }
    div img{

        width: 10vw;
        height: 15vh;

    }
    figure{
        display: flex;
        justify-content: center;
        
    }
    figure img{
        width: 5vw;
        height: 8vh;
        margin-right: 5rem;
        border: none;

    }

`;

export const Cards = styled.section`
    border: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FEB706;
    height: 40vh;
    
`;

export const Card = styled.div`
    border: none;
    border-radius: 10px;
    height: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
     img {
        border: none;
        height: 20vh;
     }
    
     button{
        border: none;
        width: 10vw;
        height: 5vh;
        background-color: #FFBC0D;
        border-radius: 10px;
        font-size: 1.rem;
     }

    section{
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 0 0 10px 10px;
        height: 15vh;
        width: 100%;
        background-color: white;
        font-size: 1.2rem;
        font-family: "Roboto", sans-serif;
    }

`;

export const Promo = styled.div`
    border: none;
    display: flex;
    justify-content: center;
    height: 10vh;
    background-color: #FEB706;
    color: white;

    h2{
        padding-top: 40px;
    }
`;