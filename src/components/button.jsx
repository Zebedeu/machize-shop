import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.1rem;
background: #ffffff;
border: 0.05rem solid hsl(355, 87%, 54%);
border-color:${props =>props.cart? "hsl(355, 87%, 54%)" : "blue"};
color:${prop => prop.cart?  "hsl(355, 87%, 54%)" : "blue"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margim: 0.2rem 0.5rem 1.2rem 0.2rem;
transition: all 0.5s ease-in-out;
&:hover {
    background:${prop =>prop.cart? "hsl(355, 87%, 54%)" : "blue"};
    color: white;
}
&:focus {
    outline: none;
}
`
