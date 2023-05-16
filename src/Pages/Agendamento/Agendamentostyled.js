import styled from "styled-components";

export const FormContainer = styled.div`
  text-align: center;
h1{
padding: 30px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 800;
font-size: 26px;}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 800;
font-size: 15px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

export const Select = styled.select`
  padding: 8px;
  margin-bottom: 16px;
  width: 20%;
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

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  width: 100%;
  height: 50px;
  background-color: #A52A2A;

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #fff;
    margin-right: 45px; 
    cursor: pointer;
  }

  img {
    cursor: pointer;
  }
  h4{
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #fff;
    margin-right: 3px; 
    cursor: pointer; 
  }
`;

