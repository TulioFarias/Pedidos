import styled from 'styled-components'



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
        backdrop-filter: blur(45px);

      
        
        
`;

 export const H1 = styled.h1 `
       color: white;
       font-size: 40px;
       

`;


export const Button = styled.button`
width: 342px;
height: 68px;
margin-top: 35px;
border: none;
outline: none;
border-radius: 14px;
font-size: 25px;
line-height: 2px;
background-color: transparent;
border: 1px solid white;
color: white;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;

&:hover{
        opacity: 0.8;
}

&:active{
        opacity: 0.5;
}

`;

export const User = styled.li`
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 342px;
        height: 108px;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 14px;
        outline: none;
        border: none;
        color: white;
        padding-left: 15px;
        

        p{      
                margin-top: 20px;
                font-size: 18px;
                font-weight: 200;
                
        }

        button{
                position: relative;
                left: 130px;
                bottom: 40px;
                background: none;
                border: none;
                cursor: pointer;

                &:hover{
                        opacity: 0.5;
                        transform: scale(1.05);
                }
        
        }

        
        
`;