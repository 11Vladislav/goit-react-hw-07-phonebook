import styled from 'styled-components';

export const StyledForm = styled.form`
   margin-top: 10px;
   margin-bottom: 30px;
   width: 300px;
 `;   

export const Input = styled.input`
   display: block;
   margin: 20px 0;
   padding: 10px 15px;
   border: 1px solid rgba(33, 33, 33, 0.2);
   border-radius: 5px;
   font-size: 15px;
   width: 250px;
`; 

export const Label = styled.label`
   display: block;
   font-weight: 500;
   font-size: 20px;
   width: 100px;
`;

export const Button = styled.button`
   width: 220px;
   height: 50px;
   margin-top: 10px;
   border: none;
   outline: none;
   color: #fff;
   background: #111;
   cursor: pointer;
   border-radius: 10px;
   font-size: 16px;
   &:hover {
       background: #333;
       color: #fff;
   }
   `;