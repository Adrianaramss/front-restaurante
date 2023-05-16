import styled from "styled-components"

export const LoginContainer = styled.div`
height: 1000px;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #A52A2A;
 div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1{
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
padding: 10px;
color: #fff;
}
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 200px;
`;

export const Button = styled.button`
  padding: 8px 50px;
  background-color: #337ab7;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-family: 'Noto Sans';
`;

export const Criarconta = styled.button`
  padding: 15px 20px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 18px;
  background:none; 
  border:none;   
  text-decoration: underline;
  font-family: 'Noto Sans';
  font-size: 15px;

`;