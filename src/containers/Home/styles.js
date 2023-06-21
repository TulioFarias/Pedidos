import styled from 'styled-components';


 export const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        background: #0A0A10;
        width: 100vw;
        height: 100vh;
        
`;

export const Img = styled.img`
    
`;

export const ContainerItens = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;

      
        
        
`;



export const P = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #EEEEEE;
    margin-top: 30px;
    
    
`;

export const Input = styled.input`
        width: 342px;
        height: 58px;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 14px;
        outline: none;
        border: none;
        color: white;
        padding-left: 15px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
`;

export const Button = styled.button`
width: 342px;
height: 68px;
background: #D93856;
margin-top: 40px;
border: none;
outline: none;
border-radius: 14px;
font-size: 20px;
line-height: 2px;
color: white;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

&:hover{
        opacity: 0.8;
}

&:active{
        opacity: 0.5;
}

`;

